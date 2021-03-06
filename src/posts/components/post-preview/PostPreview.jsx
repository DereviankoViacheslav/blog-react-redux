import './PostPreview.scss';
import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

const PostPreview = ({ id, title, body }) => {
  const history = useHistory();

  const handleClickTitle = () => {
    history.push(`/posts/${id}`);
  };

  return (
    <div className="post-preview">
      <div className="post-preview__header">
        <h2 className="post-preview__title" onClick={handleClickTitle}>{title}</h2>
      </div>
      <div className="post-preview__content-wrapper">
        {body && `${body.slice(0, 200)}...`}
      </div>
    </div>
  );
};

PostPreview.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  id: PropTypes.number,
};

PostPreview.defaultProps = {
  title: '',
  body: '',
  id: undefined,
};

export default PostPreview;