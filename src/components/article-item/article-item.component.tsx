import React from 'react';

import './article-item.css'

interface ArticleItemProps {
  story: Story.Data
}

const ArticleItem: React.FC<ArticleItemProps> = ({story}) => (
  <li className="article-item">
    <p>{story.id}</p>
    <p>{story.by}</p>
    <p>{story.type}</p>
    <p>{story.score}</p>
  </li>
)

export default ArticleItem;