import React from "react";
import { render, screen } from "@testing-library/react";
import ArticleItem from "./article-item.component";

const fetchData = async () => {
  // fetch from dummy data
  const storyItemsPath = "../../data/dummy-data.json";
  const storyItems: Story.Data[] = await (await fetch(storyItemsPath)).json();
  const randomIndex =
    Math.floor(Math.random() * (storyItemsPath.length - 0 + 1)) + 0;

  // pick a story at random from dummy data
  const randomStory = storyItems[randomIndex];

  return randomStory;
};

test("check article item renders correctly", async () => {
  const testListNumber = 1;
  const randomStory = await fetchData();

  // render article item
  render(<ArticleItem listNumber={testListNumber} story={randomStory} />);

  // expect to find title, score, by and list-number
  const title = screen.getByTestId("article-title");
  const score = screen.getByTestId("article-score");
  const by = screen.getByTestId("article-by");
  const listNumber = screen.getByTestId("article-list-number");

  expect(title.textContent).toBe(randomStory.title);
  expect(score.textContent).toBe(randomStory.score);
  expect(by.textContent).toBe(randomStory.by);
  expect(listNumber.textContent).toBe(testListNumber);
});

test("ensure that clicking on article launches new tab", async () => {
  const testListNumber = 1;
  const randomStory = await fetchData();

  // render article item
  render(<ArticleItem listNumber={testListNumber} story={randomStory} />);

  // get article
  const article = screen.getByTestId("article-item");

  // click article
  article.click();

  // check if new tab has been opened
  expect(article).toBeCalled();
});
