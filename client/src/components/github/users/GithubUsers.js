
import React from 'react'
import GithubUserItem from './GithubUserItem';
import Spinner from '../../layout/Spinner';
import { connect } from 'react-redux';

const GithubUsers = ({users,loading}) => {
// console.log('users',users)
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map((user) => (
          <GithubUserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};
const mapStateToProps =(state)=>({
    users:state,
    loading:state
})
export default connect(mapStateToProps)(GithubUsers);
// export default GithubUsers;

