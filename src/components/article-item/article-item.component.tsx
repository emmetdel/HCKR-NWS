import React from "react";

import "./article-item.scss";

interface ArticleItemProps {
  listNumber: number;
  story: Story.Data;
  openCallback?: () => void;
}

const ArticleItem: React.FC<ArticleItemProps> = ({
  story,
  listNumber,
  openCallback,
}) => (
  <li
    data-testid="article-item"
    onClick={() =>
      // if open callback is passed use, else open new tab
      openCallback ? openCallback() : window.open(story.url, "_blank")
    }
    className="article-item"
  >
    <div className="article-item__top-row">
      <span
        data-testid="article-list-number"
        className="article-item__top-row__list-number"
      >
        {listNumber}
      </span>
      <p data-testid="article-title" className="article-item__top-row__title">
        {story.title}
      </p>
    </div>
    <div className="article-item__bottom-row">
      <p data-testid="article-by" className="article-item__bottom-row__by">
        by:&nbsp;{story.by}
      </p>
      <p
        data-testid="article-score"
        className="article-item__bottom-row__score"
      >
        {story.score}&nbsp;points.
      </p>
    </div>
  </li>
);

export default ArticleItem;
