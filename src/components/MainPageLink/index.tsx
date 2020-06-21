import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ROUTES } from 'utils/consts';
import 'components/MainPageLink/index.css';

const MainPageLink = memo(() => {
  const { t } = useTranslation();
  return (
    <Link to={ROUTES.MAIN} className="link__main-page">
      <svg className="link__image">
        <image href={`${process.env.PUBLIC_URL}/chevron.svg`} width="17" height="17" />
      </svg>
      {t('to_main_page')}
    </Link>
  );
});

export default MainPageLink;
