import './MainContent.scss';
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as postsActions from '../../posts.actions';
import PostsList from '../posts-list'
import Post from '../post'

const MainContent = ({ getPostsList }) => {

  useEffect(() => {
    getPostsList();
  }, []);

  return (
    <main className="main-content">
      <Switch>
        <Route exact path="/" component={PostsList} />
        <Route path="/posts/:id" component={Post} />
      </Switch>
    </main>
  );
};

const mapDispatchToProps = {
  getPostsList: postsActions.getPostsList,
};

export default connect(null, mapDispatchToProps)(MainContent);