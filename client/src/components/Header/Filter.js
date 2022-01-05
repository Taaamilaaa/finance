import styles from "./header.module.css"
export const Filter = () => {
  return (
    <>
      <label>
        <input placeholder="Search stock" className={ styles.input}/>
      </label>
    </>
  );
};
