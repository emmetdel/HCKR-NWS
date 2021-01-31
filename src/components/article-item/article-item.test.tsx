import React from "react";
import { render, screen } from "@testing-library/react";
import ArticleItem from "./article-item.component";

import testData from "../../data/dummy-data.json";

const fetchData = async () => {
  // fetch from dummy data
  const data = testData as Story.Data[];

  const randomIndex = Math.floor(Math.random() * (data.length - 0 + 1)) + 0;

  // pick a story at random from dummy data
  const randomStory = data[randomIndex];

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

  expect(title).toHaveTextContent(randomStory.title);
  expect(score).toHaveTextContent(randomStory.score.toString());
  expect(by).toHaveTextContent(`by: ${randomStory.by}`);
  expect(listNumber).toHaveTextContent(testListNumber.toString());
});

test("ensure that clicking on article launches new tab", async () => {
  const testListNumber = 1;
  const randomStory = await fetchData();
  const testCallback = jest.fn();

  // render article item
  render(
    <ArticleItem
      listNumber={testListNumber}
      story={randomStory}
      openCallback={testCallback}
    />
  );

  // get article
  const article = screen.getByTestId("article-item");

  // click article
  article.click();

  // check if callback has been called
  expect(testCallback).toBeCalledTimes(1);
});
