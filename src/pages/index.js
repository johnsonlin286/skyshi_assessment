import { useContext, useEffect, useRef, useState } from "react";

import Heading from "../components/Heading";
import Layout from "../components/Layout";
import ActivityItem from "../components/ActivityItem";
import AddButton from "../components/AddButton";
import Image from "next/image";
import {
  fetchAllActivity,
  postNewActivity,
  deleteActivity,
} from "@/api/activity";
import ConfirmDelete from "../components/ConfirmDelete";
import { AlertContext } from "@/context/alertContext";

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
  const { visibleToggle } = useContext(AlertContext);
  const [activityData, setActivityData] = useState();
  const [pickedActivity, setPickedActivity] = useState();

  useEffect(() => {
    const allActivity = async () => {
      const result = await fetchAllActivity();
      setActivityData(result);
    };
    allActivity();
  }, []);

  const addNewActivityHandler = async () => {
    const result = await postNewActivity();
    setActivityData((prev) => [result, ...prev]);
  };

  const showConfirmDelete = (activityId, title) => {
    setPickedActivity({ id: activityId, title: title });
  };

  const onCancelHandler = () => {
    setPickedActivity();
  };

  const deleteActivityHandler = async () => {
    const result = await deleteActivity(pickedActivity.id);
    const updatedActivity = activityData.filter(
      (item) => item.id !== pickedActivity.id
    );
    visibleToggle();
    setActivityData(updatedActivity);
    setPickedActivity();
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
                  onDelete={showConfirmDelete.bind(this, item.id, item.title)}
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
      <ConfirmDelete
        isVisible={pickedActivity}
        type="activity"
        name={pickedActivity?.title}
        onCancel={onCancelHandler}
        onConfirm={deleteActivityHandler}
      />
    </Layout>
  );
}
