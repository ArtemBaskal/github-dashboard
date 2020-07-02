import React from 'react';
import { useTranslation } from 'react-i18next';
import { LANGUAGES } from 'utils/consts';
import i18n from 'utils/i18n';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'app/rootReducer';
import { setCurrentLocale } from 'features/i18n/i18nSlice';
import { setHtmlTagLangAttribute } from 'utils/helpers';
import 'features/i18n/LanguageSelector.css';

const LanguageSelector = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const currentLanguage = useSelector((state: RootState) => state.i18n.currentLocale);

  const changeLanguage = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    await i18n.changeLanguage(value);
    setHtmlTagLangAttribute(value);
    dispatch(setCurrentLocale(value));
  };

  return (
    <div className="language-selector__container">
      <label htmlFor="language-select">{t('language')}</label>
      <select
        value={currentLanguage}
        onChange={changeLanguage}
        className="language-selector"
        id="language-select"
      >
        {Object.entries(LANGUAGES)
          .map(([languageCode, { name, emojiFlag }]) => (
            <option key={name} value={languageCode}>
              {emojiFlag}
              &nbsp;
              {name}
            </option>
          ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
