import axios from "axios";

const API_URL = "https://todo.api.devcode.gethired.id/activity-groups";

export const fetchAllActivity = async () => {
  try {
    const result = await axios.get(`${API_URL}?email=orang@email.com`);
    return result.data.data;
  } catch (error) {
    throw Error(error);
  }
};

export const fetchActivity = async (activityId) => {
  try {
    const result = await axios.get(`${API_URL}/${activityId}`);
    return result.data;
  } catch (error) {
    throw Error(error);
  }
};

export const postNewActivity = async () => {
  try {
    const result = await axios.post(API_URL, {
      title: "New Activity",
      email: "orang@email.com",
    });
    return result.data;
  } catch (error) {
    throw Error(error);
  }
};

export const deleteActivity = async (activityId) => {
  try {
    const result = await axios.delete(`${API_URL}/${activityId}`);
    return result;
  } catch (error) {
    throw Error(error);
  }
};

export const patchActivity = async (activityId, newTitle) => {
  try {
    const result = await axios.patch(`${API_URL}/${activityId}`, {
      title: newTitle,
    });
    return result;
  } catch (error) {
    throw Error(error);
  }
};
