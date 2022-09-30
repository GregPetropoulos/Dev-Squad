import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchUsers, clearUsers } from '../../../actions/githubAction';
import { setAlert } from '../../../actions/githubAlert';

const GithubSearch = ({ searchUsers, clearUsers, ghFinder:{users}}) => {

  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      setAlert(' Please enter something', 'danger');
    } else {
      //console.log(this.state.text)
      //Need to call on api and pass this state to the app.js level and search for users
      searchUsers(text);
      setText('');
    }
  };
  const onChange = (e) => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='search Users...'
          value={text}
          onChange={onChange}></input>
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'></input>
      </form>

      {users.length > 0 && (
        <button className='btn btn-light btn-block' onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

GithubSearch.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired
};
const mapStateToProps = (state) => ({
    users: state.ghusers,
  searchUsers,
  clearUsers
});

export default connect(mapStateToProps, { searchUsers, setAlert, clearUsers })(
  GithubSearch
);
