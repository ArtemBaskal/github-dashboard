import React, { Component } from 'react';
import { Trans } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ROUTES } from 'utils/consts';
import log from 'utils/log';

type IProps = { children: JSX.Element };
type IState = {error: null | string};

class ErrorBoundary extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error: string) {
    return { error };
  }

  componentDidCatch(error: string | Error) {
    log.error(error);
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;

    if (error) {
      return (
        <>
          <h1>
            <Trans>error</Trans>
            :&nbsp;
            {error}
          </h1>
          <h3 className="repo-details__link--main-page">
            <Link to={ROUTES.MAIN}><Trans>to_main_page</Trans></Link>
          </h3>
        </>
      );
    }
    return children;
  }
}

export default ErrorBoundary;
