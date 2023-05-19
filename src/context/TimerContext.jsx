import { createContext, useMemo } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import useLocalStorage from 'use-local-storage';

export const TimerContext = createContext(null);

// eslint-disable-next-line import/prefer-default-export
export const TimerProvider = ({ children }) => {
  const [pomodoroTimer, setPomodoroTimer] = useLocalStorage(
    'pomodoroTimer',
    15
  );
  const [shortBreak, setShortBreak] = useLocalStorage('shortBreak', 4);
  const [longBreak, setLongBreak] = useLocalStorage('longBreak', 3);
  const TimerProviderValue = useMemo(
    () => ({
      pomodoroTimer,
      setPomodoroTimer,
      shortBreak,
      setShortBreak,
      longBreak,
      setLongBreak
    }),
    [
      pomodoroTimer,
      setPomodoroTimer,
      shortBreak,
      setShortBreak,
      longBreak,
      setLongBreak
    ]
  );
  return (
    <TimerContext.Provider value={TimerProviderValue}>
      {children}
    </TimerContext.Provider>
  );
};
