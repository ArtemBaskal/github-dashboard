import React, { memo } from 'react';
import 'components/TagsContainer/index.css';

type IProps = { tags: string[], html_url: string };

const TagsContainer = memo(({ tags, html_url }: IProps) => (
  <section className="tags__container">
    {tags.map((tag) => (
      <a
        href={`${html_url}/search?l=${tag}`}
        className="tag"
        key={tag}
        title={tag}
        target="__blank"
        rel="noopener noreferrer"
      >
        {tag}
      </a>
    ))}
  </section>
));

export default TagsContainer;
