import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import styles from './CountdownTimer.module.scss';
import sound from '../../assets/coin_c_02-102844.mp3';
import { useTheme } from '../../hooks/useTheme';

const CountdownTimer = ({ time }) => {
  const { color } = useTheme();
  const [play, setPlay] = useState(false);
  const [milliseconds, setMilliseconds] = useState(
    Math.floor(time * 60 * 1000)
  );
  const gradientAngle =
    ((milliseconds % (time * 60 * 1000)) / (time * 60 * 1000)) * 360; // Обчислення кута градієнта
  const getZero = num => {
    if (num < 10) {
      return `0${num}`;
    }
    return num;
  };
  const minutes = Math.floor((milliseconds / (1000 * 60)) % 60);
  const seconds = Math.floor((milliseconds / 1000) % 60);
  const [timer, setTimer] = useState(
    `${getZero(minutes)}: ${getZero(seconds)}`
  );

  useEffect(() => {
    const newMinutes = Math.floor((milliseconds / (1000 * 60)) % 60);
    const newSeconds = Math.floor((milliseconds / 1000) % 60);
    setTimer(`${getZero(newMinutes)}:${getZero(newSeconds)}`);
  }, [milliseconds]);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (play) {
      // eslint-disable-next-line no-shadow
      const timerInterval = setInterval(() => {
        setMilliseconds(prevMilliseconds => prevMilliseconds - 1000);
      }, 1000);

      if (milliseconds <= 0) {
        clearInterval(timerInterval);
        setPlay(false);
        return new Audio(sound).play();
      }

      return () => {
        clearInterval(timerInterval);
      };
    }
  }, [play, milliseconds]);

  const clearTimer = () => {
    setMilliseconds(Math.floor(time * 60 * 1000));
    const newMinutes = Math.floor((milliseconds / (1000 * 60)) % 60);
    const newSeconds = Math.floor((milliseconds / 1000) % 60);
    setTimer(`${getZero(newMinutes)}:${getZero(newSeconds)}`);
    setPlay(false);
  };

  return (
    <div className={styles.countDown_wrapper}>
      <div className={styles.countDown_circle}>
        <div
          className={styles.countDown_outlineCirle}
          style={{
            background: `conic-gradient(${color} ${gradientAngle}deg, #161932FF 0deg)`
          }}
        >
          <div className={styles.countDown_values}>
            <h1 className={styles.countDown_title}>{timer}</h1>
            {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
            <h3
              style={{ display: milliseconds === 0 ? 'none' : 'block' }}
              className={styles.countDown_subtitle}
              onKeyDown={() => setPlay(state => !state)}
              onClick={() => setPlay(state => !state)}
            >
              {play ? 'PAUSE' : 'START'}
            </h3>
            {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
            <h3
              style={{ display: milliseconds === 0 ? 'block' : 'none' }}
              className={styles.countDown_subtitle}
              onKeyDown={clearTimer}
              onClick={clearTimer}
            >
              RESTART
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
CountdownTimer.propTypes = {
  time: PropTypes.number
};
CountdownTimer.defaultProps = {
  time: 0
};

export default CountdownTimer;
