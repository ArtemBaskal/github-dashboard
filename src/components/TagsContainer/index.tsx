import React, { memo } from 'react';
import { shallowEqual } from 'react-redux';
import 'components/TagsContainer/index.css';

const TagsContainer = memo(({ tags }: { tags: string[] | void }) => (
  <section className="tags__container">
    {tags ? tags.map((tag) => <h6 key={tag} className="tag" title={tag}>{tag}</h6>) : null}
  </section>
), shallowEqual);

export default TagsContainer;
