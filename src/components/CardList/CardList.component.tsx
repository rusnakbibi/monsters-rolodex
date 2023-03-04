import { CardListData } from 'types/cardList.types';

import { CardComponent } from '../Card';

import styles from './CardList.module.scss';

const CardList = ({ data }: CardListData) => {
  return (
    <div className={styles.cardList}>
      {data.map((element) => {
        return <CardComponent cardData={element} key={element.id} />;
      })}
    </div>
  );
};

export default CardList;
