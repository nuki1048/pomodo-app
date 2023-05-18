import PropTypes from 'prop-types';
import React from 'react';

import styles from './Title.module.scss';

const Title = ({ text }) => <h5 className={styles.title}>{text}</h5>;

export default Title;

Title.propTypes = {
  text: PropTypes.string
};

Title.defaultProps = {
  text: 'pomodoro'
};
