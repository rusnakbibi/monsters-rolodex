import { useState, useEffect, ChangeEvent } from 'react';

import { getData } from 'utils/data.utils';
import { Monster } from 'types/monster.types';
import { CardListComponent, SearchBoxComponent } from './components';
import styles from './App.module.scss';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>(
        'https://jsonplaceholder.typicode.com/users'
      );
      setMonsters(users);
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchField(searchValue);
  };

  return (
    <div className={styles.App}>
      <h1 className={styles.appTitle}>Monsters Rolodex</h1>
      <SearchBoxComponent
        onChangeHandler={onSearchChange}
        placeholder={'search monsters'}
        className='monsters-search-box'
      />
      <CardListComponent data={filteredMonsters} />
    </div>
  );
};

export default App;
