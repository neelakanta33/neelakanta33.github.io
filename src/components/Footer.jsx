import useTheme from '../hooks/useTheme.js';

export default function Footer() {
  const { theme, toggle } = useTheme();
  return (
    <footer>
      <span>© {new Date().getFullYear()} Neelakanta A. Built with React and Vite.</span>
      <button className="theme-btn" type="button" onClick={toggle}>
        {theme === 'dark' ? 'Use light theme' : 'Use dark theme'}
      </button>
    </footer>
  );
}
