import React, { useState } from 'react';

import styles from './Modal.module.scss';
import closeIcon from '../../assets/icons/icon-close.svg';
import icon from '../../assets/icons/icon-settings.svg';
import { useTheme } from '../../hooks/useTheme';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={styles.modal_btn}
      >
        <img src={icon} alt="settings icon" />
      </button>
      <View isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

const View = ({ isOpen, setIsOpen }) => {
  const { color, setColor, font, setFont } = useTheme();
  const colors = ['#F87070', '#70F3F8', '#D881F8'];

  const fonts = ['Kumbh Sans', 'Roboto Slab', 'Space Mono'];

  const handleSubmit = e => {
    e.preventDefault();
    setIsOpen(false);
  };
  return (
    <div
      className={styles.modal}
      style={{ display: isOpen ? 'block' : 'none' }}
    >
      <form
        onSubmit={handleSubmit}
        className={styles.modal_content}
        style={{ display: isOpen ? 'block' : 'none' }}
      >
        <h2 className={styles.modal_title}>Settings</h2>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#" onClick={() => setIsOpen(false)}>
          <img
            src={closeIcon}
            alt="close icon"
            className={styles.modal_close}
          />
        </a>
        <hr className={styles.modal_breakLine} />
        <div className={styles.modal_timeBlock}>
          <h4 className={styles.modal_title}>TIME (MINUTES)</h4>
          <div className={styles.form}>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label>
              <span>pomodoro</span>
              <input type="number" />
            </label>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label>
              <span>short break</span>
              <input type="number" />
            </label>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label>
              <span>long break</span>
              <input type="number" />
            </label>
          </div>
        </div>
        <hr />
        <div className={styles.modal_fontBlock}>
          <h4 className={styles.modal_title}>FONT</h4>
          <div className={styles.flex}>
            {fonts.map(item => (
              <div
                key={item}
                onClick={() => setFont(item)}
                onKeyDown={() => setFont(item)}
                style={{ fontFamily: item }}
                role="button"
                tabIndex={0}
                className={
                  font === item
                    ? styles.modal_fontCirle_active
                    : styles.modal_fontCirle
                }
              >
                Aa
              </div>
            ))}
          </div>
        </div>
        <hr />
        <div className={styles.modal_colorBlock}>
          <h4 className={styles.modal_title}>COLOR</h4>
          <div className={styles.flex}>
            {colors.map(item => (
              <div
                key={item}
                role="button"
                tabIndex={0}
                onClick={() => setColor(item)}
                onKeyDown={() => setColor(item)}
                style={{ background: item }}
                className={
                  color === item
                    ? styles.modal_colorCircle_active
                    : styles.modal_colorCircle
                }
              />
            ))}
          </div>
        </div>
        <button type="submit" className={styles.modal_btnSubmit}>
          Apply
        </button>
      </form>
    </div>
  );
};
export default Modal;
