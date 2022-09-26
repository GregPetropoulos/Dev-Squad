import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const GithubNavbar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon} />
        {title}
      </h1>
      <ul>
      <li>
          <Link to='/Home'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};

GithubNavbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github'
};
//   This is default runs if no props passed to <Navbar/> in app.js
GithubNavbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};
//Typechecking

export default GithubNavbar;
