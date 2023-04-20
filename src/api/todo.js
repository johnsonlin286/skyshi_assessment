import axios from "axios";

const API_URL = "https://todo.api.devcode.gethired.id/todo-items";

export const postNewTodo = async ({ activityId, title, priority }) => {
  try {
    const result = await axios.post(API_URL, {
      activity_group_id: activityId,
      title: title,
      priority: priority,
    });
    return result;
  } catch (error) {
    throw Error(error);
  }
};

export const patchTodo = async ({ todoId, title, priority, isActive }) => {
  try {
    const result = await axios.patch(`${API_URL}/${todoId}`, {
      title: title,
      priority: priority,
      is_active: isActive,
    });
    return result;
  } catch (error) {
    throw Error(error);
  }
};
