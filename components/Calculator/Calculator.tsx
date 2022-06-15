import Button from '../Button/Button';
import Display from '../Display/Display';
import styles from './Calculator.module.scss';

const Calculator = () => {
  return (
    <div className={styles.container}>
      <Display />
      <Button />
    </div>
  );
};
export default Calculator;
