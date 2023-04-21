import { useEffect, useMemo, useState, useContext, useRef } from "react";
import { useRouter } from "next/router";

import { TodoModalContext } from "@/context/todoModalContext";
import { fetchActivity, patchActivity } from "@/api/activity";
import Layout from "@/components/Layout";
import Heading from "@/components/Heading";
import HeadingEdit from "@/components/HeadingEdit";
import AddButton from "@/components/AddButton";
import TodoList from "@/components/TodoList";
import SortOptions from "@/components/SortOptions";

const headingRightContent = () => {
  const { modalToggle } = useContext(TodoModalContext);
  return (
    <div className="flex">
      <SortOptions className="mr-[18px]" />
      <AddButton name="todo-add-button" onClick={() => modalToggle(true)} />
    </div>
  );
};

function ActivityDetailPage() {
  const router = useRouter();
  const activityId = useMemo(() => {
    return router.query.id;
  }, [router]);
  const [activityData, setActivityData] = useState();

  const getActivity = async () => {
    const result = await fetchActivity(activityId);
    setActivityData(result);
  };

  useEffect(() => {
    if (!activityId) {
      return;
    }
    getActivity();
  }, [activityId]);

  const patchActivityTitle = async (newTitle) => {
    setActivityData((prev) => ({
      ...prev,
      title: newTitle,
    }));
    const result = await patchActivity(activityId, newTitle);
    return result;
  };

  return (
    <Layout>
      <div className="container">
        <Heading
          canGoBack
          leftContent={
            <HeadingEdit
              activityId={activityId}
              title={activityData?.title}
              onDoneEdit={patchActivityTitle.bind(this)}
            />
          }
          rightContent={headingRightContent()}
        />
        <section>
          <TodoList
            activityId={activityId}
            todos={activityData?.todo_items}
            fetcUpdate={getActivity}
          />
        </section>
      </div>
    </Layout>
  );
}

export default ActivityDetailPage;
