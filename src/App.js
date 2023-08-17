import { Component } from 'react';

import { CardListComponent, SearchBoxComponent } from './components';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => this.setState(() => ({ monsters: users })));
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => ({ searchField }));
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField)
    );

    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBoxComponent
          onChangeHandler={onSearchChange}
          placeholder="Search monsters"
          className="monsters-search-box"
        />
        <CardListComponent monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
