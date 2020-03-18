import * as postsGateway from './postsGateway';
import { postsListSelector } from './posts.selectors';

export const POSTS_LIST_RECIEVED = 'POSTS_LIST_RECIEVED';
export const SINGLE_POST_RECIEVED = 'SINGLE_POST_RECIEVED';

export const singlePostRecieved = (singlePost) => ({
  type: SINGLE_POST_RECIEVED,
  payload: { singlePost },
});

export const getSinglePost = (postId) => {
  const thunkAction = (dispatch) => {
    postsGateway.fetchSinglePost(postId)
      .then((post) => {
        dispatch(singlePostRecieved(post));
      });
  };
  return thunkAction;
};

export const createComment = (comment) => {
  const thunkAction = (dispatch) => {
    postsGateway.addComment(comment)
      .then(() => dispatch(getSinglePost(comment.postId)));
  };
  return thunkAction;
};

export const postsListRecieved = (postsList) => ({
  type: POSTS_LIST_RECIEVED,
  payload: { postsList },
});

export const getPostsList = () => {
  const thunkAction = (dispatch) => {
    postsGateway.fetchPosts()
      .then((postsList) => {
        dispatch(postsListRecieved(postsList));
      });
  };
  return thunkAction;
};

export const editPost = (postId, newDataPost) => {
  const thunkAction = (dispatch, getState) => {
    const posts = postsListSelector(getState());
    const oldPost = posts.find(({ id }) => id === postId);
    const newPost = {
      ...oldPost,
      ...newDataPost,
    };
    postsGateway.updatePost(newPost)
      .then(() => {
        dispatch(getPostsList());
        dispatch(getSinglePost(postId));
      });
  };
  return thunkAction;
};

export const createPost = (post) => {
  const thunkAction = (dispatch) => {
    postsGateway.addPost(post)
      .then(() => dispatch(getPostsList()));
  };
  return thunkAction;
};

export const deletePost = (postId) => {
  const thunkAction = (dispatch) => {
    postsGateway.deletePost(postId)
      .then(() => dispatch(getPostsList()));
  };
  return thunkAction;
};
