import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../utils/consts';

const NotFoundPage = () => (
  <>
    <h2>Ошибка 404: Страница не найдена</h2>
    <Link to={ROUTES.MAIN}>На главную</Link>
  </>
);

export default NotFoundPage;
