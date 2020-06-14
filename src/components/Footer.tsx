import React from 'react';
import LanguageSelector from '../features/i18n/LanguageSelector';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <span className="footer__year">{`Copyright © ${new Date().getFullYear()}`}</span>
    <LanguageSelector />
  </footer>
);

export default Footer;
