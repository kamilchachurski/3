import
{
    GET_POSTS_SUCCESS,
    GET_POSTS_FAILURE,
    REMOVE_POST
} from "features/home/posts/redux/types";

const homeReducer = (state = { posts: null }, action) =>
{
    switch(action.type)
    {
        case GET_POSTS_SUCCESS:
            return { ...state, posts: action.payload };
        case GET_POSTS_FAILURE:
            return { ...state, errorCode: action.payload };
        case REMOVE_POST:
        {
            let posts = [...state.posts];
            posts.shift();

            return { ...state, posts };
        }
        default:
            return state;
    }
}

export default homeReducer;