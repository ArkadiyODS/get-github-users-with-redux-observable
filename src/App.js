import React from 'react'; 
import { useSelector } from 'react-redux';
import './App.css';
import {Search, List} from './components';

function App() {
  const state = useSelector(s => s);
  return (
    <div className="App">
      <header>Find GitHub user</header>
      <Search />
      <hr/>
      <List />
      <hr/>
      {JSON.stringify(state, null, 3)}
    </div>
  );
}

export default App;
