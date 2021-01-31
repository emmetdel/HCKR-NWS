import axios from "axios";

const URL = "https://hacker-news.firebaseio.com/v0";
const localStorageKey = "hacker-news-index-array";
const lastUpdatedTimeKey = "hacker-news-last-update";

// check if time is less or more than 10 mins ago
const lessThan10MinsAgo = (timeLastUpdated: string) => {
  try {
    const TenMins = 1000 * 10 * 60;
    const anHourAgo = Date.now() - TenMins;
    return parseInt(timeLastUpdated) > anHourAgo;
  } catch (error) {
    return false;
  }
};

// fetch indexes
const _fetchIndexes = async (storyType: string): Promise<number[]> => {
  try {
    const indexArr = sessionStorage.getItem(localStorageKey);
    const timeLastUpdated = sessionStorage.getItem(lastUpdatedTimeKey);

    // if index or timeLastUpdated not present in local storage or timeLastUpdated is not more than 10 mins ago, fetch new indexes
    if (!indexArr || !timeLastUpdated || !lessThan10MinsAgo(timeLastUpdated)) {
      const resp = await axios.get(`${URL}/${storyType}stories.json`);
      const indexArr = resp.data;

      // sets local storage items, index array and last update time
      sessionStorage.setItem(JSON.stringify(localStorageKey), indexArr);
      sessionStorage.setItem(lastUpdatedTimeKey, Date.now().toString());

      return indexArr;
    }

    return JSON.parse(indexArr);
  } catch (error) {
    return [];
  }
};

// fetch posts from API
const fetchPosts = async (
  pageNumber: number,
  pageSize: number,
  storyType: string
): Promise<Story[]> => {
  const storyIndexArray = await _fetchIndexes(storyType);

  try {
    const start = pageNumber * pageSize;
    const end = start + pageSize;

    // take slice from index array and create array of api calls, which result in a promise
    const storyPrmArr = storyIndexArray
      .slice(start, end)
      .map(async (storyId: number, index: number) => {
        const story = (await axios.get(`${URL}/item/${storyId}.json`)).data;
        story.displayNumber = start + index + 1;
        return story;
      });

    // wait for all promises to resolve and return
    return await Promise.all(storyPrmArr);
  } catch (error) {
    console.error(error);
    return [];
  }
};

// given the assumption that max 500 posts returned from api, calculate total num of pages
const totalNumberPages = (pageSize: number) => Math.ceil(500 / pageSize);

export { fetchPosts, totalNumberPages };
