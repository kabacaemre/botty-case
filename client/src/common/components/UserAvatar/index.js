import React from 'react';

import './UserAvatar.scss';

function getInitials(string) {
  return string
    .match(/\b(\w)/g)
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

function UserAvatar({ profileImg, name, color }) {
  return (
    <div className="user-avatar" style={{ background: color }}>
      {profileImg ? <img src={profileImg} alt={name} /> : <p>{getInitials(name)}</p>}
    </div>
  );
}

export default UserAvatar;
