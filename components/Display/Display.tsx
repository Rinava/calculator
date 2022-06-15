import styles from './Display.module.scss';
const result= 442323;
const Display = () => {
  return <div className={styles.container}>{result}</div>;
};
export default Display;
