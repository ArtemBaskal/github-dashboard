import React from 'react';
import { useTranslation } from 'react-i18next';
import 'components/Loading/index.css';

type IProps = {
    text?: string
}

const Loading = ({ text }: IProps) => {
  const { t } = useTranslation();
  return <h4 className="loader__text">{text || t('loading')}</h4>;
};

export default Loading;
