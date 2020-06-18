import React from 'react';
import { ROUTES } from 'utils/consts';
import { Link } from 'react-router-dom';
import 'components/Header/index.css';

const Header = () => (
  <header className="header">
    <Link to={ROUTES.MAIN} className="header__link">
      <svg width="50" height="50">
        <image className="header__image" href={`${process.env.PUBLIC_URL}/react-logo.svg`} />
      </svg>
      <h2 className="header__link--name">Dashboard</h2>
    </Link>
  </header>
);

export default Header;
