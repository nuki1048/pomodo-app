import { useState } from 'react';

import styles from './Tabs.module.scss';
import { useTimer } from '../../hooks/useTimer';
import TabsItem from '../tabsItem/TabsItem';
import CountdownTimer from '../сountdownTimer/CountdownTimer';

const Tabs = () => {
  const [index, setIndex] = useState(0);
  const { pomodoroTimer, shortBreak, longBreak } = useTimer();
  const showTab = i => {
    setIndex(i);
  };
  const tabsContent = [
    <CountdownTimer time={+pomodoroTimer} />,
    <CountdownTimer time={+shortBreak} />,
    <CountdownTimer time={+longBreak} />
  ];
  const tabsItemsOptions = ['pomodoro', 'short break', 'long break'];

  return (
    <>
      <div className={styles.tabs}>
        <ul className={styles.tabs_wrapper}>
          {tabsItemsOptions.map((text, indexText) => (
            <TabsItem
              key={text}
              text={text}
              checked={indexText === index}
              handleClick={() => showTab(indexText)}
            />
          ))}
        </ul>
      </div>
      {tabsContent.map((content, indexContent) => (
        <div
          /* eslint-disable-next-line react/no-array-index-key */
          key={indexContent}
          style={{ display: index === indexContent ? 'block' : 'none' }}
        >
          {content}
        </div>
      ))}
    </>
  );
};

export default Tabs;
