import React, { forwardRef } from 'react';
import ErrorBoundary from 'components/ErrorBoundary';

const withErrorBoundary = <T, >(Component: React.ComponentType<T>) => forwardRef(
  (props: T, ref) => (
    <ErrorBoundary>
      <Component {...props} ref={ref} />
    </ErrorBoundary>
  ),
);

export default withErrorBoundary;
