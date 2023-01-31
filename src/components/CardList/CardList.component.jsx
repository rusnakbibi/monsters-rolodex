import { CardComponent } from '../Card';

import styles from './CardList.module.scss';

const CardList = ({ data }) => {
  return (
    <div className={styles.cardList}>
      {data.map((element) => {
        return <CardComponent cardData={element} key={element.id} />;
      })}
    </div>
  );
};

export default CardList;
