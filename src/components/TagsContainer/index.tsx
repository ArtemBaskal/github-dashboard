import React from 'react';
import 'components/TagsContainer/index.css';

const TagsContainer = ({ tags }: { tags: string[] | void }) => (
  <section className="tags__container">
    {tags ? tags.map((tag) => <h6 key={tag} className="tag" title={tag}>{tag}</h6>) : null}
  </section>
);

export default TagsContainer;
