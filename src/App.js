import { useState, useEffect } from 'react';

import { CardListComponent, SearchBoxComponent } from './components';

import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const filteredArray = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField)
    );

    setFilteredMonsters(filteredArray);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchField(searchValue);
  };

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
};

export default App;
