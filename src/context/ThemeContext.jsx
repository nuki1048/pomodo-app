import { createContext, useMemo, useState } from 'react';

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [color, setColor] = useState('#F87070');
  const [font, setFont] = useState('Kumbh Sans');
  const ThemeProviderValue = useMemo(
    () => ({ color, font, setColor, setFont }),
    [color, font]
  );
  return (
    <ThemeContext.Provider value={ThemeProviderValue}>
      {children}
    </ThemeContext.Provider>
  );
};
