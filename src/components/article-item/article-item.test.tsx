import React from 'react';
import { render, screen } from '@testing-library/react';
import ArticleItem from './article-item.component';

const storyItemsPath = '../../data/dummy-data.json';

test('finds by in article item', async () => {
  const storyItems: Story.Data[] = await (await fetch(storyItemsPath)).json();
  const randomIndex = Math.floor(Math.random() * (storyItemsPath.length - 0 + 1)) + 0;

  const randomStory = storyItems[randomIndex];

  render(<ArticleItem story={randomStory} />);
  const by = await screen.findAllByText(randomStory.by)
  expect(by).toBe(1)

});
