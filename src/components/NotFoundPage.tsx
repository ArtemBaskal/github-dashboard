import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ROUTES } from '../utils/consts';

const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <h2>{t('page_is_not_found')}</h2>
      <Link to={ROUTES.MAIN}>{t('go_to_main_page')}</Link>
    </>
  );
};

export default NotFoundPage;
