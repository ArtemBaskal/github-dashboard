import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Contributor } from 'features/reposList/types';
import 'components/Profile/index.css';
import { shallowEqual } from 'react-redux';

const Profile = memo(({
  avatar_url, html_url, login, contributions,
}: Partial<Contributor>) => {
  const { t } = useTranslation();
  return (
    <figcaption className="profile__container">
      <a href={html_url}>
        <img src={avatar_url} alt={login} className="profile__avatar" />
        <figure className="profile__login">{login}</figure>
        {contributions
                && (
                <strong className="profile__contributions">
                  {`${t('contributions')}:`}
                  &nbsp;
                  {`${contributions}`}
                </strong>
                )}
      </a>
    </figcaption>
  );
}, shallowEqual);

export default Profile;
