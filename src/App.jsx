import { Component } from 'react';

import { CardListComponent, SearchBoxComponent } from './components';
import style from './App.module.scss';

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
      .then((resp) => resp.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    return (
      <div className={style.App}>
        <SearchBoxComponent
          onChangeHandler={onSearchChange}
          placeholder={'search monsters'}
          className="search-box"
        />
        <CardListComponent monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
