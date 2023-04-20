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

export const patchTodo = async ({ data }) => {
  try {
    console.log(data);
    // const result = await axios.patch(`${API_URL}/${todoId}`, {
    //   title: title,
    //   priority: priority,
    //   is_active: isActive,
    // });
    // return result;
    return null;
  } catch (error) {
    throw Error(error);
  }
};

export const checkTodo = async (data) => {
  try {
    const result = await axios.patch(`${API_URL}/${data.id}`, {
      is_active: data.is_active === 1 ? 0 : 1,
    });
    return result;
  } catch (error) {
    throw Error(error);
  }
};

export const deleteTodo = async (todoId) => {
  try {
    const result = await axios.delete(`${API_URL}/${todoId}`);
    return result;
  } catch (error) {
    throw Error(error);
  }
};
