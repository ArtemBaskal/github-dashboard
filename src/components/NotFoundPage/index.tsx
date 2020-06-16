import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ROUTES } from 'utils/consts';
import 'components/NotFoundPage/index.css';

const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <div className="not-found-page__container">
      <h2 className="not-found-page__header">{t('page_is_not_found')}</h2>
      <Link to={ROUTES.MAIN}>{t('go_to_main_page')}</Link>
    </div>
  );
};

export default NotFoundPage;
