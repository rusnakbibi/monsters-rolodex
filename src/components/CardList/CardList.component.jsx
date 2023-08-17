import { Component } from 'react';

import { CardComponent } from '../Card';

import './CardList.styles.css';

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <CardComponent monster={monster} key={monster.id} />;
        })}
      </div>
    );
  }
}

export default CardList;
