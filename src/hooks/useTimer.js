import { useContext } from 'react';

import { TimerContext } from '../context/TimerContext';

// eslint-disable-next-line import/prefer-default-export
export const useTimer = () => {
  const context = useContext(TimerContext);
  if (context === undefined) {
    throw new Error('useTimer need to use with ThemeProvider');
  }
  return context;
};
