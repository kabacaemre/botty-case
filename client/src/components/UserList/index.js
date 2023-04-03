import React from 'react';
import { useSelector } from 'react-redux';

import User from './User';

import './UserList.scss';

function UserList() {
  const { users } = useSelector((state) => state.users);
  return (
    <div className="user-list">
      <div className="user-list__header">
        <div className="user-list__header__left">
          <span className="user-list__header__left__text">All Messages</span>
          <i className="fas fa-chevron-down user-list__header__left__icon" />
        </div>
        <div className="user-list__header__right">
          <i className="fas fa-cog user-list__header__right__icon" />
        </div>
      </div>
      <div className="user-list__users">
        {users && (
          <>
            {users.map((user) => {
              return <User key={user.name} {...user} />;
            })}
          </>
        )}
      </div>
    </div>
  );
}

export default UserList;
