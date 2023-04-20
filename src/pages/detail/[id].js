import { useEffect, useMemo, useState, useContext } from "react";
import { useRouter } from "next/router";

import { TodoModalContext } from "@/context/todoModalContext";
import { fetchActivity, patchActivity } from "@/api/activity";
import Layout from "@/components/Layout";
import Heading from "@/components/Heading";
import HeadingEdit from "@/components/HeadingEdit";
import AddButton from "@/components/AddButton";
import TodoList from "@/components/TodoList";
// import ModalAddTodo from "@/components/ModalAddTodo";
// import { postNewTodo } from "@/api/todo";

function ActivityDetailPage() {
  const router = useRouter();
  const { modalToggle } = useContext(TodoModalContext);
  const activityId = useMemo(() => {
    return router.query.id;
  }, [router]);
  const [activityData, setActivityData] = useState();
  // const [showAddModal, setShowAddModal] = useState(false);

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

  // const saveTodoHandler = async (todo) => {
  //   const result = await postNewTodo({ activityId: activityId, ...todo });
  //   getActivity();
  // };

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
          rightContent={
            <AddButton
              name="todo-add-button"
              onClick={() => modalToggle(true)}
            />
          }
        />
        <section>
          <TodoList
            activityId={activityId}
            todos={activityData?.todo_items}
            fetcUpdate={getActivity}
            // addNewTodo={showAddModal}
            // onPatch={(data, name) => console.log(data, name)}
          />
        </section>
      </div>
      {/* <ModalAddTodo
        isVisible={showAddModal}
        onClose={() => setShowAddModal(false)}
        onSave={saveTodoHandler.bind(this)}
      /> */}
    </Layout>
  );
}

export default ActivityDetailPage;
