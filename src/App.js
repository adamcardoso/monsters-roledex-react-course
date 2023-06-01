import { useState } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {

  const [searchField, setSearchField] = useState(''); // [value, setValue]

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox className='monsters-search-box' onChangeHandler={onSearchChange} placeholder='Search Monsters'/>
    </div>
  );
};


export default App;
