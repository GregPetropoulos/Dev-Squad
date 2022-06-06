import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { getGithubRepos } from '../../actions/profile';
import { connect } from 'react-redux';

const ProfileGithub = ({ username, getGithubRepos, repos }) => {
  useEffect(() => {
    getGithubRepos(username);
  }, [getGithubRepos, username]);
  return (
    <div className='profile-github'>
      <h2 className='text-primary my-1 mobile-heading'>Github Repos</h2>
      {repos.map((repo) => (
        <div key={repo.id} className='repo bg-white p-1 my-1 mobile-text'>
          <div>
            <h4 className='mobile-text truncate'>
              <a href={repo.html_url} target='_blank' rel='noopener noreferrer'
              className='mobile-text'>
                {repo.name}
              </a>
            </h4>
            <p className='mobile-text'>{repo.description}</p>
          </div>
          <div>
            <ul>
              <li className='badge badge-primary star'>
                Stars: {repo.stargazers_count}
              </li>
              <li className='badge badge-dark'>
                Watchers: {repo.watchers_count}
              </li>
              <li className='badge badge-light'>Forks: {repo.forks_count}</li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

ProfileGithub.propTypes = {
  getGithubRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  repos: state.profile.repos
});
export default connect(mapStateToProps, { getGithubRepos })(ProfileGithub);
