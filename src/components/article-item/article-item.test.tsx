import React from "react";
import { render, screen } from "@testing-library/react";
import ArticleItem from "./article-item.component";

import testData from "../../data/dummy-data.json";

const fetchData = async () => {
  // fetch from dummy data
  const data = testData as Story[];

  const randomIndex = Math.floor(Math.random() * (data.length - 0 + 1)) + 0;

  // pick a story at random from dummy data
  const randomStory = data[randomIndex];

  return randomStory;
};

test("check article item renders correctly", async () => {
  const randomStory = await fetchData();

  // render article item
  render(<ArticleItem story={randomStory} />);

  // expect to find title, score, by and list-number
  const title = screen.getByTestId("article-title");
  const score = screen.getByTestId("article-score");
  const by = screen.getByTestId("article-by");

  expect(title).toHaveTextContent(randomStory.title);
  expect(score).toHaveTextContent(randomStory.score.toString());
  expect(by).toHaveTextContent(`by: ${randomStory.by}`);
});

test("ensure that clicking calls callback fn", async () => {
  const randomStory = await fetchData();
  const testCallback = jest.fn();

  // render article item
  render(<ArticleItem story={randomStory} openCallback={testCallback} />);

  // get article
  const article = screen.getByTestId("article-item");

  // click article
  article.click();

  // check if callback has been called
  expect(testCallback).toBeCalledTimes(1);
});
