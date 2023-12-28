import React from 'react';
import './cookie-term.scss';

const CookiesTerm = () => {
  return (
    <div className="cookies-term">
      <p className="cookies-term__title">COOKIES</p>
      <p className="cookies-term__description">
        Once you tap “Gioca ora”, we’ll use cookies to enable operation of the site, and to measure
        usage and engagement
      </p>
      <div className="cookies-term__link-wrapper">
        <p className="cookies-term__link-wrapper__link">Privacy Policy</p>
        <span className="cookies-term__link-wrapper__divider">|</span>
        <p className="cookies-term__link-wrapper__link">Launchpad w/o Analytics Cookies</p>
      </div>
    </div>
  );
};

export default CookiesTerm;
