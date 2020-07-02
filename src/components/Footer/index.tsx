import React, { memo } from 'react';
import LanguageSelector from 'features/i18n/LanguageSelector';
import 'components/Footer/index.css';
import { PROJECT_REPO_LINK } from 'utils/consts';

const Footer = memo(() => (
  <footer className="footer">
    <span className="footer__year">
      <a
        className="icon--purple footer__link"
        href={PROJECT_REPO_LINK}
        target="_blank"
        rel="noopener noreferrer"
      >
        &copy;
      </a>
      &nbsp;
      <time>{new Date().getFullYear()}</time>
    </span>
    <LanguageSelector />
  </footer>
));

export default Footer;
