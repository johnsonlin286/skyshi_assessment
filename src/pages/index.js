import { useEffect, useRef, useState } from "react";

import Heading from "./components/Heading";
import Layout from "./components/Layout";
import ActivityItem from "./components/ActivityItem";
import AddButton from "./components/AddButton";
import Image from "next/image";
import {
  fetchAllActivity,
  postNewActivity,
  deleteActivity,
} from "@/api/activity";

const headingLeft = () => {
  return (
    <h2
      data-cy="activity-title"
      className="text-4xl text-dark font-bold text-dark100"
    >
      Activity
    </h2>
  );
};

export default function Home() {
  const isMoundted = useRef(false);
  const [activityData, setActivityData] = useState();

  useEffect(() => {
    if (!isMoundted.current) {
      isMoundted.current = true;
      return;
    }
    const allActivity = async () => {
      const result = await fetchAllActivity();
      setActivityData(result);
    };
    allActivity();
  }, [isMoundted]);

  const addNewActivityHandler = async () => {
    const result = await postNewActivity();
    setActivityData((prev) => [result, ...prev]);
  };

  const deleteActivityHandler = async (activityId) => {
    const result = await deleteActivity(activityId);
    const updatedActivity = activityData.filter(
      (item) => item.id !== activityId
    );
    setActivityData(updatedActivity);
  };

  return (
    <Layout>
      <div className="container">
        <Heading
          leftContent={headingLeft()}
          rightContent={
            <AddButton
              name="activity-add-button"
              onClick={addNewActivityHandler}
            />
          }
        />
        <section className="flex flex-wrap -mx-[10px]">
          {activityData && activityData.length > 0 ? (
            activityData.map((item) => (
              <div key={item.id} className="w-1/4 px-[10px] pb-[26px]">
                <ActivityItem
                  id={item.id}
                  title={item.title}
                  date={item.created_at}
                  onDelete={deleteActivityHandler.bind(this, item.id)}
                />
              </div>
            ))
          ) : (
            <div className="w-full flex justify-center items-center">
              <button onClick={addNewActivityHandler}>
                <Image
                  data-cy="activity-empty-state"
                  src={"/image/activity-empty-state.png"}
                  alt="empty-state"
                  width={767}
                  height={490}
                />
              </button>
            </div>
          )}
        </section>
      </div>
    </Layout>
  );
}
