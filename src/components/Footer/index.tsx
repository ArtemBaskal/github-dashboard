import React from 'react';
import LanguageSelector from 'features/i18n/LanguageSelector';
import 'components/Footer/index.css';
import { PROJECT_REPO_LINK } from 'utils/consts';

const Footer = () => (
  <footer className="footer">
    <span className="footer__year">
      <a className="icon--purple" href={PROJECT_REPO_LINK}>©</a>
      &nbsp;
      <time>{new Date().getFullYear()}</time>
    </span>
    <LanguageSelector />
  </footer>
);

export default Footer;
