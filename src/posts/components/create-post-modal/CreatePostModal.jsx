import './CreatePostModal.scss';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as postsActions from '../../posts.actions';

const CreatePostModal = (props) => {
  const { title = '', body = '', id, handleOpenModal, createPost, editPost } = props;
  const [namePost, setNamePost] = useState(title);
  const [bodyPost, setBodyPost] = useState(body);

  const handleCreatePost = () => {
    const post = { title: namePost, body: bodyPost };
    if (id || id === 0) {
      editPost(id, post);
    } else {
      createPost(post);
    }
    handleOpenModal();
  };

  return (
    <div className="modal">
      <div className="modal__layer" onClick={handleOpenModal} />
      <div className="modal__form">
        <h4 className="modal__title">Post name</h4>
        <input
          className="modal__input-name"
          type="text"
          value={namePost}
          onChange={(event) => setNamePost(event.target.value)}
        />
        <h4 className="modal__title">Content</h4>
        <textarea
          className="modal__textarea"
          value={bodyPost}
          onChange={(event) => setBodyPost(event.target.value)}
        />
        <button
          className="modal__create-btn"
          onClick={handleCreatePost}
        >
          Send
      </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  createPost: postsActions.createPost,
  editPost: postsActions.editPost,
};

export default connect(null, mapDispatchToProps)(CreatePostModal);