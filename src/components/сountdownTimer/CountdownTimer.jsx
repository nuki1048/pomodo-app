import PropTypes from 'prop-types';

import styles from './CountdownTimer.module.scss';

const CountdownTimer = ({ time }) => (
  <div className={styles.countDown_wrapper}>
    <div className={styles.countDown_circle}>
      <div className={styles.countDown_outlineCirle}>
        <div className={styles.countDown_values}>
          <h1 className={styles.countDown_title}>{time}</h1>
          <h3 className={styles.countDown_subtitle}>RESTART</h3>
        </div>
      </div>
    </div>
  </div>
);
CountdownTimer.propTypes = {
  time: PropTypes.number
};
CountdownTimer.defaultProps = {
  time: 0
};

export default CountdownTimer;
