import styles from './Button.module.scss';
const mock = {
  function: () => {},
  symbol: '+',
};
const Button = () => {
  return (
    <div className={styles.container}>
      <button onClick={mock.function} className={styles.button}>
        {mock.symbol}
      </button>
    </div>
  );
};
export default Button;
