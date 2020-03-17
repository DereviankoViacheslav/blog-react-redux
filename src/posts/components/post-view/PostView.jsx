import './PostView.scss';
import React from 'react';
import Comments from '../comments';

const PostView = ({ title, body, comments, id, handleOpenModal }) => {
  return (
    <div className="post">
      <div className="post__header">
        <h2 className="post__title"> {title}</h2>
        <div className="post__controls" onClick={handleOpenModal}>
          <i className="material-icons">edit</i>
        </div>
      </div>
      <div className="post__content-wrapper">
        <p className="post__content">{body}</p>
      </div>
      <div className="post__comments">
        <Comments comments={comments} postId={id} />
      </div>
    </div>
  );
};

export default PostView;