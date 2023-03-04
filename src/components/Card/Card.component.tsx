import { CardData } from 'types/cardData.types';

import styles from './Card.module.scss';

const Card = ({ cardData }: CardData) => {
  const { id, name, email } = cardData;
  return (
    <div className={styles.cardContainer} key={id}>
      <img
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt={`Monster ${name}`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
