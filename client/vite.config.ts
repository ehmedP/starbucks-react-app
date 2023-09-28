import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig(({ command, mode }) => {

  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    server: {
      port: env.VITE_PORT,
      host: env.VITE_HOST,
    },
    preview: {
      port: env.VITE_PORT,
      host: env.VITE_HOST,
    },
    base: env.VITE_BASE_URL,
  }
});
