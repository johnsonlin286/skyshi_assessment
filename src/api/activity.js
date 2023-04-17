import axios from "axios";

export const fetchAllActivity = async () => {
  try {
    const result = await axios.get(
      "https://todo.api.devcode.gethired.id/activity-groups?email=orang@email.com"
    );
    return result.data.data;
  } catch (error) {
    throw Error(error);
  }
};

export const postNewActivity = async () => {
  try {
    const result = await axios.post(
      "https://todo.api.devcode.gethired.id/activity-groups",
      {
        title: "New Activity",
        email: "orang@email.com",
      }
    );
    return result.data;
  } catch (error) {
    throw Error(error);
  }
};

export const deleteActivity = async (activityId) => {
  try {
    const result = await axios.delete(
      `https://todo.api.devcode.gethired.id/activity-groups/${activityId}`
    );
    return result;
  } catch (error) {
    throw Error(error);
  }
};
