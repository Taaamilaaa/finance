import styles from "./header.module.css";

export const Filter = ({ onFilterChange }) => {
  const onChangeVal = (event) => {
    onFilterChange(event.currentTarget.value);
  };

  return (
    <>
      <label>
        <input
          onChange={onChangeVal}
          placeholder="Search stock"
          className={styles.input}
        />
      </label>
    </>
  );
};
