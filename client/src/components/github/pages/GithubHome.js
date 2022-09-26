import React, { Fragment } from 'react';
import GithubSearch from '../users/GithubSearch';
import GithubUsers from '../users/GithubUsers';

const Home = () => (
  <Fragment>
    <GithubSearch />
    <GithubUsers />
  </Fragment>
);
export default Home;