import './App.css';
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'

import { useState , useEffect } from 'react';

const App = () => {

  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setMonsters(users));
  },[])

  const [searchField , setSearchField] = useState('');
  const [monsters , setMonsters] = useState([]);

  const onSearchChange = (event) => {
    setSearchField(event.target.value.toLowerCase());
  }

  const filteredMonsters = monsters.filter(monster => {
    return monster.name.toLowerCase().includes(searchField)
  })

  return (
          <div className="App">
              <h1 className="app-title">Monsters Rolodex</h1>
              <SearchBox
                className='monsters-search-box'
                placeholder='Search Monsters'
                onChangeHandler={onSearchChange}
              />
    
              <CardList monsters={filteredMonsters}/>
          </div>
        )
}

export default App;
