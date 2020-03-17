import './Post.scss';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as postsActions from '../../posts.actions';
import { singlePostSelector } from '../../posts.selectors';
import { useParams } from 'react-router-dom';
import PostView from '../post-view';
import CreatePostModal from '../create-post-modal';

const Post = ({ getSinglePost, singlePost }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const param = useParams();

  useEffect(() => {
    if (param) {
      getSinglePost(param.id);
    }
  }, []);

  const handleOpenModal = () => {
    setIsOpenModal((isOpenModal) => setIsOpenModal(!isOpenModal));
  };

  return (
    <>
      {isOpenModal && <CreatePostModal {...singlePost} handleOpenModal={handleOpenModal} />}
      {singlePost && <PostView {...singlePost} handleOpenModal={handleOpenModal} />}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    singlePost: singlePostSelector(state),
  };
};

const mapDispatchToProps = {
  getSinglePost: postsActions.getSinglePost,
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);