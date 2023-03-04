import { ChangeEvent } from 'react';
import styles from './SearchBox.module.scss';

type SearchBoxProps = {
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className: string;
};

const SearchBox = ({
  onChangeHandler,
  placeholder,
  className,
}: SearchBoxProps) => {
  return (
    <input
      className={`${styles.searchBoxInput} ${className}`}
      type='search'
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
