import { Component } from 'react';

import { CardComponent } from '../Card';

import styles from './CardList.module.scss';

class CardList extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className={styles.cardList}>
        {data.map((element) => {
          return <CardComponent cardData={element} key={element.id} />;
        })}
      </div>
    );
  }
}

export default CardList;
