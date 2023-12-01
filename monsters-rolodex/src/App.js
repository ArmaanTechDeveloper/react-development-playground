import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'

class App extends Component {
  constructor() {
    super()

    // state initialization
    this.state = {
      monsters: [],
      searchField: ''
    }

  }

  // runs only once in whole lifecycle of react
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(() => { return { monsters: users } }, () => { console.log(this.state) }))
  }

  // search function attached to class so doesn't get created again & again
  onSearchChange = (event) => {
    this.setState({searchField: event.target.value.toLocaleLowerCase()})
  }

  render() {
    //destructring from state and class
    const { monsters , searchField } = this.state;
    const { onSearchChange } = this;

    // filtered Monsters from the man state monsters
    let filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    })

    return (
      <div className="App">
          <h1 className="app-title">Monsters Rolodex</h1>
          <SearchBox
            className='monsters-search-box'
            placeholder='Search Monsters'
            onChangeHandler={onSearchChange}
          />

          <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
