import React, { useEffect, useState } from 'react';
import ArticleItem from './components/article-item/article-item.component';
import List from './components/list/list.component';
import { fetchPosts } from './data/api';

function Main() {

  const [posts, setPosts] = useState<Story.Data[]>([]);

  useEffect(() => {
    fetchPosts("top", 1, 40).then(postArr => setPosts(postArr));
  }, [])

  return (
    <div id="body-main">
      <List>
        {posts.map((story) => <ArticleItem key={story.id} story={story} />)}
      </List>
    </div>
  );
}

export default Main;
