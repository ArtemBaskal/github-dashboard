import React, { Component } from 'react';
import log from 'utils/log';
import ErrorMessage from 'components/ErrorMessage';

type IProps = { children: JSX.Element };
type IState = { error: null | string };

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

    return error ? <ErrorMessage message={error} /> : children;
  }
}

export default ErrorBoundary;
