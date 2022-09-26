import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Profiles from '../profiles/Profiles';
import { demoLogin } from '../../actions/auth';

const Landing = ({ demoLogin, isAuthenticated, isDemo }) => {
  const [demoData, setDemoData] = useState({
    email: 'gregpetropoulos0341@gmail.com',
    password: 'password'
  });
  const { email, password } = demoData;

  const onDemoSubmit = async (e) => {
    e.preventDefault();
    // console.log('SUCCESS on DEMO');
    demoLogin(email, password);
  };

  if (isAuthenticated || isDemo) {
    return <Navigate to='/dashboard' />;
  }

  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>Developer Squad</h1>
          <p className='lead'>
            Create a developer profile/portfolio, share posts and get help from
            other developers
          </p>
          <div className='buttons'>
            <Link to='/register' className='btn btn-primary'>
              Sign Up
            </Link>
            <Link to='/login' className='btn btn-light'>
              Login
            </Link>
            <form onSubmit={onDemoSubmit}>
              <button type='submit' className='btn btn-primary'>
                Demo
              </button>
            </form>

            <a
              href='https://github-spotter.vercel.app/'
              target='_blank'
              rel='noreferrer'
              className='btn btn-light'>
              Github Finder
            </a>
          </div>
        </div>
        <Profiles />
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
  isDemo: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  isDemo: state.auth.isDemo
});

export default connect(mapStateToProps, { demoLogin })(Landing);
