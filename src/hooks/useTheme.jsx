import { useState } from 'react';
import { lightTheme } from '../themes';

const useTheme = () => {
  const [currentTheme] = useState(lightTheme);

  return {
    currentTheme,
  };
};

export default useTheme;
