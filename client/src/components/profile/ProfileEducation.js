import React from 'react';
import PropTypes from 'prop-types';
import formatDate from '../../utils/formatDate';

const ProfileEducation = ({
  education: { school, degree, fieldofstudy, current, to, from, description }
}) => (
  <div>
    <h3 className='text-dark mobile-heading'>{school}</h3>
    <p className='mobile-text'>
      {formatDate(from)} - {to ? formatDate(to) : 'Now'}
    </p>
    <p className='mobile-text'>
      <strong>Degree: </strong> {degree}
    </p>
    <p className='mobile-text'>
      <strong>Field Of Study: </strong> {fieldofstudy}
    </p>
    <p className='mobile-text'>
      <strong>Description: </strong> {description}
    </p>
  </div>
);

ProfileEducation.propTypes = {
  education: PropTypes.object.isRequired
};

export default ProfileEducation;
