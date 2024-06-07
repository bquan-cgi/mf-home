import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remote_app",
      filename: "remoteEntry.js",
      exposes: {
        "./CounterButton": "./src/CounterButton",
        "./MainLayout": "./src/MainLayout",
        "./Nav": "./src/Nav",
        "./Footer": "./src/Footer",
        "./ErrorPage": "./src/ErrorPage",
      },
      remotes: {
        app1: "http://localhost:3001/assets/remoteEntry.js",
        app2: "http://localhost:3002/assets/remoteEntry.js",
        app3: "http://localhost:3003/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom", "react-router-dom"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
})
