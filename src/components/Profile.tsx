import React from 'react';
import { useTranslation } from 'react-i18next';
import { Contributor } from 'features/reposList/types';
import './Profile.css';

const Profile = ({
  avatar_url, html_url, login, contributions,
}: Partial<Contributor>) => {
  const [t] = useTranslation();
  return (
    <div className="profile__container">
      <a href={html_url}>
        <img src={avatar_url} alt={login} loading="lazy" className="profile__avatar" />
        <h3 className="profile__login">{login}</h3>
        {contributions
                && <small className="profile__contributions">{`${t('contributions')}: ${contributions}`}</small>}
      </a>
    </div>
  );
};

export default Profile;
