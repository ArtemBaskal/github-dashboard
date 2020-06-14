import React from 'react';
import { useTranslation } from 'react-i18next';
import { LANGUAGES } from 'utils/consts';
import i18n from 'utils/i18n';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/rootReducer';
import { setCurrentLocale } from './i18nSlice';
import './LanguageSelector.css';

const LanguageSelector = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const currentLanguage = useSelector((state: RootState) => state.i18n.currentLocale);

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    i18n.changeLanguage(value);
    dispatch(setCurrentLocale(value));
  };

  return (
    <div className="language-selector">
      <span>
        {t('language')}
        :
        {' '}
      </span>
      <select
        value={currentLanguage}
        onChange={changeLanguage}
      >
        {Object.entries(LANGUAGES)
          .map(([languageCode, languageName]) => (
            <option key={languageName} value={languageCode}>
              {languageName}
            </option>
          ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
