import axios from 'axios';

const URL = 'https://hacker-news.firebaseio.com/v0';


const fetchPosts = async (storyType: "top"| "new", page_number: number, page_size: number): Promise<Story.Data[]> => {
  const topStories = `${URL}/${storyType}stories.json`;

    try {

        const resp = await axios.get(topStories)
        
        const storiesIndexes: string[] = resp.data;

        const start = page_number * page_size;
        const end = start + page_size;
      
        const storyPrmArr = storiesIndexes.slice(start, end).map(async storyId => {
          return (await axios.get(`${URL}/item/${storyId}.json`)).data;
        });

        return await Promise.all(storyPrmArr);

    } catch (err) {
      console.error(err);
      return []
    }

}



export {fetchPosts}