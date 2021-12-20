import React, {Fragment, useEffect } from 'react';
import Spinner from "../../layout/Spinner";
import { Link } from 'react-router-dom';

import GithubRepos from '../../github/repos/GithubRepos';
import { getUser, getUserRepos } from '../../../actions/githubAction';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'


export const GithubUser =({match, loading, getUser, user, repos, getUserRepos})=> {

    useEffect(() => {
        getUser(match.params.login);
        getUserRepos(match.params.login)
    }, []);

    const {
        name,
        avatar_url,
        location,
        bio,
        blog,
        login,
        html_url,
        company,
        followers,
        following,
        public_repos,
        public_gists,
        hireable
      } = user;

    if (loading) return <Spinner />;
    return(
<Fragment>
 <Link to='/' className='btn btn-light'>
      &#8592;{''} Back to Search
      </Link>
      Hireable: {''}
      {hireable ? (
        <i className='fas fa-check text-success' />
      ) : (
        <i className='fas fa-times-circle text-danger' />
      )}
      <div className='card grid-2'>
        <div className='all-center'>
          <img
            src={avatar_url}
            className='round-img'
            alt=''
            style={{ width: '150px' }}
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className='btn btn-dark my-1'>
            Visit Github Profile
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Username:</strong> {login}
                </Fragment>
              )}
            </li>
            <li>
              {company && (
                <Fragment>
                  <strong>Company:</strong> {company}
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <strong>Website:</strong> {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className='card text-center'>
        <div className='badge badge-primary'>Followers: {followers}</div>
        <div className='badge badge-success'>Following: {following}</div>
        <div className='badge badge-light'>Public Repos: {public_repos}</div>
        <div className='badge badge-dark'>Public Gists: {public_gists}</div>
      </div>
<GithubRepos repos={repos}/>
</Fragment>
    );

   
};
GithubUser.propTypes = {
    getUser:PropTypes.func.isRequired,
    getUserRepos:PropTypes.func.isRequired,
}
const mapStateToProps =(state) => ({
    users:state.users,
    user:state.user,
    repos:state.repos,
    loading:state.loading,
    getUser,
    getUserRepos
})

export default connect(mapStateToProps, {getUser, getUserRepos})(GithubUser)