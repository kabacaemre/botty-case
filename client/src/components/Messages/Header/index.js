import React from 'react';

import Avatar from '../../../assets/img/logo.png';
import UserAvatar from '../../../common/components/UserAvatar';

import './Header.scss';

function Header() {
  return (
    <div className="messages__header">
      <div className="messages__header__left-content">
        <UserAvatar profileImg={Avatar} name="ssttek" color="#FFFFFF" />
        <div className="messages__header__left-content__text">
          <h1>
            ssttek <i className="messages__header__online-dot" />
          </h1>
          <p>Cloud, The Internet</p>
        </div>
      </div>
      <div className="messages__header__right-content">
        <div className="messages__header__status">
          <i className="far fa-eye" />
          <span className="no-margin">botty-beep-boop</span>
        </div>
        <div className="messages__header__status">
          <i className="far fa-clock" />
          <span className="no-margin">5m</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
