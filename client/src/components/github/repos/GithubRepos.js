import React from 'react';
import PropTypes from 'prop-types';
import GithubRepoItem from './GithubRepoItem';


const GithubRepos = ({repos}) => {
    return repos.map(repo => <GithubRepoItem repo={repo} key={repo.id} />);
};

GithubRepos.propTypes= {
    repos: PropTypes.array.isRequired,
};

export default GithubRepos
