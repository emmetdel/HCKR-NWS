import React from 'react';
import Main from "./views/Main.view"

import {fetchPosts} from './data/api'

function App() {
  fetchPosts("top",0, 30).then(x => console.log(x));
  return <Main />
}

export default App;