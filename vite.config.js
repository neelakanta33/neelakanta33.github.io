import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' makes the build work both at neelakanta33.github.io
// and at neelakanta33.github.io/<repo-name>/ without changes.
export default defineConfig({
  plugins: [react()],
  base: './',
});
