import React from 'react';
import ErrorBoundary from 'components/ErrorBoundary';

const withErrorBoundary = <T, >(Component: React.ComponentType<T>) => (props: T) => (
  <ErrorBoundary>
    <Component {...props} />
  </ErrorBoundary>
);

export default withErrorBoundary;
