import React from 'react';

import UserAvatar from '../../../common/components/UserAvatar';

import './User.scss';

function User({ name, userId, isOnline, lastActive, color, profileImg, lastMessage }) {
  return (
    <div className={`user-list__users__user ${userId === 'bot' ? 'user-list__users__user--active' : ''}`}>
      <UserAvatar profileImg={profileImg} name={name} color={color} />
      <div className="user-list__users__user__right-content">
        <div className="user-list__users__user__title">
          <span>{name}</span>
          <i className={isOnline ? 'user-list__users__user__online' : ''}>{isOnline ? 'Online' : lastActive}</i>
        </div>
        <p>{lastMessage}</p>
      </div>
    </div>
  );
}

export default User;
