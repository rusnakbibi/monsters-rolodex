import { CardComponent } from '../Card';

import './CardList.styles.css';

const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <CardComponent monster={monster} key={monster.id} />;
      })}
    </div>
  );
};

export default CardList;
