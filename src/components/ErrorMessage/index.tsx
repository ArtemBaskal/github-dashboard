import React from 'react';
import { useTranslation } from 'react-i18next';
import MainPageLink from 'components/MainPageLink';
import 'components/ErrorMessage/index.css';

type IProps = {
    message: string
}

const ErrorMessage = ({ message }: IProps) => {
  const { t } = useTranslation();
  return (
    <div className="error-message__container">
      <h1 className="error-message__header">
        {t('error')}
        :
        &nbsp;
        {t(message)}
      </h1>
      <MainPageLink />
    </div>
  );
};

export default ErrorMessage;
