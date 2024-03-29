import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const GithubUserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt=''
        className='round-img'
        style={{ width: '60px' }}
      />
      <h3>{login}</h3>
      <div>
        <Link to={`/user/${login}`} className='btn btn-dark ntm-sm my-1'>
          More Info
        </Link>
      </div>
    </div>
  );
};
GithubUserItem.protoTypes ={
    user:PropTypes.object.isRequired,
}
export default GithubUserItem;
