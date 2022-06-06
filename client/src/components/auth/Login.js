import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login, demoLogin } from '../../actions/auth';
// import authReducer from '../../reducers/auth';

const Login = ({ login, demoLogin, isAuthenticated, isDemo }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  // const [demoData, setDemoData] = useState({
  //   demoEmail: 'gregpetropoulos0341@gmail.com',
  //   demoPassword: 'password'
  // });
  // const { demoEmail, demoPassword } = demoData;
  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    // console.log('SUCCESS');
    login(email, password);
  };

  // const onDemoSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log('SUCCESS on DEMO');
  //   demoLogin(demoEmail, demoPassword);
  // };

  if (isAuthenticated) {
    return <Navigate to='/dashboard' />;
  }
  return (
    <section className='container'>
      <h1 className='large text-primary'>Sign In</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Sign into Your Account
      </p>
      {/* <form onSubmit={onDemoSubmit}>
        <button
          type='submit'
          // onSubmit={onDemoSubmit}
          className='btn btn-primary'>
          Demo
        </button>
      </form> */}
      <form className='form' onSubmit={onSubmit}>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={onChange}
            required
          />
        </div>

        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            minLength='6'
            value={password}
            onChange={onChange}
            required
          />
        </div>

        <input type='submit' className='btn btn-primary' value='Login' />
      </form>
   
      <p className='my-1'>
        Don't have an account? <Link to='/register'>Sign Up</Link>
      </p>
    </section>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  demoLogin: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  isDemo: PropTypes.bool
};
// Needed to get auth state for the isAuthenticated to be brought in
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  // isDemo: state.auth.isDemo
});

export default connect(mapStateToProps, { login, demoLogin })(Login);
