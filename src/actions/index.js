import { memoize } from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => async (dispatch) => {
  const { data } = await jsonPlaceholder.get("posts");

  dispatch({ type: "FETCH_POSTS", payload: data });
};

export const fetchUser = (id) => (dispatch) => {
  _fetchUser(id, dispatch);
};

const _fetchUser = memoize(async (id, dispatch) => {
  const { data } = await jsonPlaceholder.get(`users/${id}`);

  dispatch({ type: "FETCH_USER", payload: data });
});
