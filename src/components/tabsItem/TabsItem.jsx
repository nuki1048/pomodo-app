import PropTypes from 'prop-types';
import React from 'react';

import styles from './TabsItem.module.scss';

const TabsItem = ({ checked, text, handleClick }) => (
  <li
    role="tab"
    tabIndex={0}
    onClick={handleClick}
    onKeyDown={handleClick}
    className={checked ? styles.tabs_item_active : styles.tabs_item}
  >
    {text}
  </li>
);

TabsItem.defaultProps = {
  checked: false,
  text: 'Pomodoro'
};
TabsItem.propTypes = {
  checked: PropTypes.bool,
  // eslint-disable-next-line react/require-default-props
  handleClick: PropTypes.func,
  text: PropTypes.string
};

export default TabsItem;
