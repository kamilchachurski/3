import axios from "axios";

import
{
    GET_POSTS_SUCCESS,
    GET_POSTS_FAILURE,
    REMOVE_POST
} from "features/home/posts/redux/types";

export const getPostsAction = () => dispatch =>
{
    axios({ method: "GET", url: "https://jsonplaceholder.typicode.com/posts" })
        .then(response => dispatch({ type: GET_POSTS_SUCCESS, payload: response.data }))
        .catch(error => dispatch({ type: GET_POSTS_FAILURE, payload: error.response.status }));
}

export const removePostAction = () => ({ type: REMOVE_POST });