import React, { forwardRef } from 'react';
import { ROUTES } from 'utils/consts';
import { Link } from 'react-router-dom';
import 'components/Header/index.css';

const Header = forwardRef<HTMLHeadElement>((props, ref) => (
  <header className="header__container" ref={ref}>
    <Link to={ROUTES.MAIN} className="header__link">
      <svg width="50" height="50">
        <image className="header__image" href={`${process.env.PUBLIC_URL}/github-logo.svg`} />
      </svg>
      <h2 className="header__link--name">Dashboard</h2>
    </Link>
  </header>
));

export default Header;
