import styles from './SearchBox.module.scss';

const SearchBox = ({ onChangeHandler, placeholder, className }) => {
  return (
    <input
      className={`${styles.searchBoxInput} ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
