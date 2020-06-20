import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import 'components/Loading/index.css';

type IProps = {
    text?: string
}

const Loading = memo(({ text }: IProps) => {
  const { t } = useTranslation();
  return <h1 className="loader__text">{text || t('loading')}</h1>;
});

export default Loading;
