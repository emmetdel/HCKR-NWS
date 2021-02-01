// interface for story data that will be returned from the API
interface Story {
  id: number;
  displayNumber: number;
  by: string;
  kids: number[];
  score: number;
  time: number;
  type: string;
  url: string;
  title: string;
}
