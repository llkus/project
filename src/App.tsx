import { useState } from 'react';
import './App.css';
import { ThemeProvider } from '@/components/theme-provider';
import Dashboard from '@/components/Dashboard';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;