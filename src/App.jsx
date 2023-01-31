import { Component } from 'react';

import { CardListComponent, SearchBoxComponent } from './components';
import styles from './App.module.scss';

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
      <div className={styles.App}>
        <h1 className={styles.appTitle}>Monsters Rolodex</h1>
        <SearchBoxComponent
          onChangeHandler={onSearchChange}
          placeholder={'search monsters'}
          className="monsters-search-box"
        />
        <CardListComponent data={filteredMonsters} />
      </div>
    );
  }
}

export default App;
