import React from 'react';
import PropTypes from 'prop-types';
import formatDate from '../../utils/formatDate';

const ProfileExperience = ({
  experience: { company, title, location, current, to, from, description }
}) => (
  <div>
    <h3 className='text-dark mobile-heading'>{company}</h3>
    <p className='mobile-text'>
      {formatDate(from)} - {to ? formatDate(to) : 'Now'}
    </p>
    <p className='mobile-text'>
      <strong>Position: </strong> {title}
    </p>
    <p className='mobile-text'>
      <strong>Location: </strong> {location}
    </p>
    <p className='mobile-text'>
      <strong>Description: </strong> {description}
    </p>
  </div>
);

ProfileExperience.propTypes = {
  experience: PropTypes.object.isRequired
};

export default ProfileExperience;
