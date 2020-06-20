import React, { memo } from 'react';
import ErrorMessage from 'components/ErrorMessage';

const NotFoundPage = memo(() => <ErrorMessage message="page_is_not_found" />);

export default NotFoundPage;
