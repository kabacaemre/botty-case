import React from "react";

import Avatar from "../../assets/img/logo_large.png"
import "./ContactPanel.scss";

function ContactPanel() {
  return (
    <div className="contact-panel">
      <div className="contact-panel__header">
        <div className="contact-panel__header__profile">
          <div className="contact-panel__header__profile__picture">
            <img src={Avatar} alt="ssttek" />
          </div>
          <h1>www.ssttek.com</h1>
        </div>
      </div>
      <div className="contact-panel__body">
        <div className="contact-panel__body__block">
          <div className="contact-panel__body__block__item">
            <p className="contact-panel__body__label">Email</p>
            <span className="contact-panel__body__value">ssttech@example.com</span>
          </div>
          <div className="contact-panel__body__block__item">
            <p className="contact-panel__body__label">Phone</p>
            <span className="contact-panel__body__value">+04 - 123456789</span>
          </div>
        </div>
        <div className="contact-panel__body__block">
          <p className="contact-panel__body__label">Labels</p>
          <div className="contact-panel__body__labels">
            <button type="button">
              Bot
              <i className="fas fa-times" />
            </button>
            <button type="button">
              React
              <i className="fas fa-times" />
            </button>
          </div>
        </div>
        <div className="contact-panel__body__block">
          <p className="contact-panel__body__label">Attachments</p>
          <ul className="contact-panel__body__attachments">
            <li>Dataset.csv</li>
            <li>bot_face.jpg</li>
            {/* <li>botty_face.jpg</li> */}
          </ul>
          <button type="button" className="contact-panel__body__link">View All</button>
        </div>
        <button className="contact-panel__body__edit-btn">React</button>
      </div>
    </div>
  );
}

export default ContactPanel;
