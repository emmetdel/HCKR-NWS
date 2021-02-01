import React, { useEffect, useState } from "react";
import ArticleItem from "./components/article-item/article-item.component";
import Header from "./components/header/header.component";
import List from "./components/list/list.component";
import Paginator from "./components/paginator/paginator.component";

// import api functionality
import { fetchPosts, totalNumberPages } from "./data/api";

function Main() {
  const [posts, setPosts] = useState<Story[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(30);
  const [storyType, setStoryType] = useState<"top" | "new">("top");

  // on component mount fetch posts and set state
  useEffect(() => {
    fetchPosts(pageNumber, pageSize, storyType).then((postsArr) => {
      setPosts(postsArr);
      setLoading(false);
    });
  }, [pageNumber, pageSize, storyType]);

  // set story type
  const _setStory = (type: "top" | "new") => {
    setLoading(true);
    setStoryType(type);
    setPageNumber(0);
  };

  // set page size
  const _setPageSize = (size: number) => {
    setLoading(true);
    setPageSize(size);
    setPageNumber(0);
  };

  // set page number
  const _setPageNumber = (pageNumber: number) => {
    setLoading(true);
    setPageNumber(pageNumber);
  };

  return (
    <div id="body-main" data-testid="body-main">
      <Header
        setStoryType={_setStory}
        setPageSize={_setPageSize}
        selectedStoryType={storyType}
        selectedPageSize={pageSize}
      />
      <List loading={loading}>
        {posts.map((story) => (
          <ArticleItem key={story.id} story={story} />
        ))}
      </List>
      <Paginator
        pageNumber={pageNumber}
        setPageNumber={_setPageNumber}
        totalNumPages={totalNumberPages(pageSize)}
      />
    </div>
  );
}

export default Main;
