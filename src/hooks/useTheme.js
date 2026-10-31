import { useCallback, useEffect, useState } from 'react';

const KEY = 'nk-theme';
const systemDark = () => window.matchMedia?.('(prefers-color-scheme: dark)').matches;

export default function useTheme() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem(KEY) || (systemDark() ? 'dark' : 'light');
    } catch {
      return systemDark() ? 'dark' : 'light';
    }
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggle = useCallback(() => {
    setTheme((t) => {
      const next = t === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem(KEY, next);
      } catch {
        /* storage unavailable */
      }
      return next;
    });
  }, []);

  return { theme, toggle };
}
