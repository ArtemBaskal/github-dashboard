import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LANGUAGES } from 'utils/consts';
import i18n from 'utils/i18n';

const LanguageSelector = () => {
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const { t } = useTranslation();

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    i18n.changeLanguage(value);
    setCurrentLanguage(value);
  };

  return (
    <>
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
    </>
  );
};

export default LanguageSelector;
