import { POSTS_LIST_RECIEVED, SINGLE_POST_RECIEVED } from './posts.actions';

const initialState = {
  postsList: [],
  singlePost: null,
};

export default function reduser(state = initialState, action) {
  switch (action.type) {
    case POSTS_LIST_RECIEVED:
      return {
        ...state,
        postsList: [...action.payload.postsList]
      };
    case SINGLE_POST_RECIEVED:
      return {
        ...state,
        singlePost: action.payload.singlePost
      };
    default: return state;
  }
}