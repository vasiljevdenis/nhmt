import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig(({ mode }) => {
  process.env = Object.assign(process.env, loadEnv(mode, process.cwd()));

  return {
    plugins: [
      react(),
    ],
    server: {
      open: true
    },
    optimizeDeps: {
      include: [
        '@emotion/react', 
        '@emotion/styled', 
        '@mui/material/Tooltip'
      ],
    },
    resolve: {
      alias: {
        '@data': path.resolve(__dirname, './src/Eoms/data/' + process.env.VITE_CURRENT_COK),
        '@images': path.resolve(__dirname, './src/assets/images/' + process.env.VITE_CURRENT_COK),
        '@videos': path.resolve(__dirname, './src/assets/videos/' + process.env.VITE_CURRENT_COK)
      }
    }
  }
})