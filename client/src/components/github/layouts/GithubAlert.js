import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const GithubAlert = () => {

  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className='fas fa-info-circle'>{alert.msg}</i>
      </div>
    )
  );
};
GithubAlert.propTypes = {
    alerts: PropTypes.array.isRequired
  };
  
  const mapStateToProps = (state) => ({
    //  *!check this
    alerts: state
  });
  
  export default connect(mapStateToProps)(GithubAlert);

