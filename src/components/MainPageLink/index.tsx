import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ROUTES } from 'utils/consts';
import 'components/MainPageLink/index.css';

const MainPageLink = () => {
  const { t } = useTranslation();
  return (
    <Link to={ROUTES.MAIN} className="link__main-page">
      {t('to_main_page')}
    </Link>
  );
};

export default MainPageLink;
