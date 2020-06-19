import React, { forwardRef } from 'react';
import SearchInput from 'features/search/SearchInput';
import ReposList from 'features/reposList/ReposList';
import Paginator from 'features/pagination/Paginator';
import Scroller from 'components/Scroller';
import withErrorBoundary from 'utils/HOCs/withErrorBoundary';

const MainPage = forwardRef<HTMLHeadElement>((props, ref) => (
  <>
    <SearchInput />
    <ReposList />
    <Paginator />
    <Scroller ref={ref} />
  </>
));

export default withErrorBoundary(MainPage);
