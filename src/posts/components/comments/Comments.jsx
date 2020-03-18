import './Comments.scss';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as postsActions from '../../posts.actions';

const Comments = ({ comments, postId, createComment }) => {
  const [text, setText] = useState('');

  const handleCreateComment = () => {
    createComment({ postId, body: text });
    setText('');
  };

  return (
    <div className="comments">
      <h4>Create comment</h4>
      <textarea
        className="comments__textarea"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button
        className="comments__create-btn"
        onClick={handleCreateComment}
      >
        Send
      </button>
      <h3>Comments</h3>
      <ul className="comments__list">
        {comments && comments.map(({ id, body }) => {
          return (<li key={id} className="comments__item">{body}</li>);
        })}
      </ul>
    </div>
  );
};

Comments.propTypes = {
  createComment: PropTypes.func.isRequired,
  postId: PropTypes.number.isRequired,
  comments: PropTypes.array,
};

Comments.defaultProps = {
  comments: [],
};

const mapDispatchToProps = {
  createComment: postsActions.createComment,
};

export default connect(null, mapDispatchToProps)(Comments);