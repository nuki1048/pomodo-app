import { createContext, useMemo } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import useLocalStorage from 'use-local-storage';

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [color, setColor] = useLocalStorage('color', '#F87070');
  const [font, setFont] = useLocalStorage('font', 'Kumbh Sans');
  const ThemeProviderValue = useMemo(
    () => ({ color, font, setColor, setFont }),
    [color, font, setColor, setFont]
  );
  return (
    <ThemeContext.Provider value={ThemeProviderValue}>
      {children}
    </ThemeContext.Provider>
  );
};
