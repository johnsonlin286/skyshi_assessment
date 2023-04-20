import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";

import { fetchActivity, patchActivity } from "@/api/activity";
import Layout from "@/components/Layout";
import Heading from "@/components/Heading";
import HeadingEdit from "@/components/HeadingEdit";
import AddButton from "@/components/AddButton";
import TodoList from "@/components/TodoList";
import ModalAddTodo from "@/components/ModalAddTodo";

function ActivityDetailPage() {
  const router = useRouter();
  const activityId = useMemo(() => {
    return router.query.id;
  }, [router]);
  const [activityData, setActivityData] = useState();
  const [showAddModal, setShowAddModal] = useState(false);

  useEffect(() => {
    if (!activityId) {
      return;
    }
    const getActivity = async () => {
      const result = await fetchActivity(activityId);
      setActivityData(result);
    };
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
          rightContent={
            <AddButton
              name="todo-add-button"
              onClick={() => setShowAddModal(true)}
            />
          }
        />
        <section>
          <TodoList todos={activityData?.todo_items} />
        </section>
      </div>
      <ModalAddTodo
        isVisible={showAddModal}
        onClose={() => setShowAddModal(false)}
        onSave={() => {}}
      />
    </Layout>
  );
}

export default ActivityDetailPage;
