import React, { useEffect, useState } from "react";
import ArticleItem from "./components/article-item/article-item.component";
import List from "./components/list/list.component";
import Paginator from "./components/paginator/paginator.component";

// import api functionality
import { fetchPosts, totalNumberPages } from "./data/api";

function Main() {
  const [posts, setPosts] = useState<Story[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(30);
  const [storyType, setStoryType] = useState<"top" | "new">("top");

  // on component mount fetch posts and set state
  useEffect(() => {
    fetchPosts(pageNumber, pageSize, storyType).then((postsArr) =>
      setPosts(postsArr)
    );
  }, [pageNumber, pageSize, storyType]);

  return (
    <div id="body-main" data-testid="body-main">
      <List>
        {posts.map((story) => (
          <ArticleItem key={story.id} story={story} />
        ))}
      </List>
      <Paginator
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        totalNumPages={totalNumberPages(pageSize)}
      />
    </div>
  );
}

export default Main;
