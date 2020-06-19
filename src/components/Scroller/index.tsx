import React, { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';
import 'components/Scroller/index.css';

const Scroller = forwardRef<HTMLHeadElement>((props, ref) => {
  const { t } = useTranslation();

  if (!ref) {
    return null;
  }

  const onClick = () => {
    // FIXME
    // @ts-ignore
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return <button type="button" onClick={onClick} className="scroller" title={t('scroll_to_top')}>&uarr;</button>;
});

export default Scroller;
