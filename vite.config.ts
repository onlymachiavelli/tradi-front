import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config(); // Load the environment variables from the .env file

export default defineConfig({
  plugins: [react()],
});