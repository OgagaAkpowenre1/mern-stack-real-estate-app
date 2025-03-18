import apiRequest from "./apiRequest";

export const singlePageLoader = async ({ request, params }) => {
  const res = await apiRequest("/posts/" + params.id);
  return res.data;
};

export const listPageLoader = async ({ request, params }) => {
  const query = request.url.split("?")[1];
  const postResponse = await apiRequest("/posts?" + query);
  return { postResponse };  // No need for defer in older versions
};

export const profilePageLoader = async () => {
  const postPromise = await apiRequest("/users/profilePosts");
  const chatPromise = await apiRequest("/chats/");
  return { postPromise, chatPromise };  // No need for defer in older versions
};