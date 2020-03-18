import './PostsList.scss';
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { postsListSelector } from '../../posts.selectors';
import PostPreview from '../post-preview';

const PostsList = ({ postsList }) => {
  const postElementsList = postsList.map((post) => {
    return <PostPreview key={post.id} {...post} />
  });

  return (
    <>
      {postsList.length !== 0 && postElementsList}
    </>
  );
};

PostsList.propTypes = {
  postsList: PropTypes.array,
};

PostsList.defaultProps = {
  postsList: [],
};

const mapStateToProps = (state) => {
  return {
    postsList: postsListSelector(state),
  };
};

export default connect(mapStateToProps)(PostsList);