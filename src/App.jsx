import { useState, useEffect } from 'react';

import { CardListComponent, SearchBoxComponent } from './components';
import styles from './App.module.scss';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((resp) => resp.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchField(searchValue);
  };

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
};

export default App;
