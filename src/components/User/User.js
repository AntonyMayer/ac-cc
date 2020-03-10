import React from 'react';
import './User.scss';

const User = ({ firstName, lastName }) => {
  const fullName = `${firstName} ${lastName}`.trim();
  const initials = `${firstName[0] || ''}${lastName[0] || ''}`.toUpperCase();

  const markup = (
    <div className="User">
      <div className="User__initials">{initials}</div>
      <div className="User__full-name">{fullName}</div>
    </div>
  );

  return initials ? markup : null;
};

export default User;