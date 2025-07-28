import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css'; // Ensure Tailwind is imported
import MyProvider from './components/MyProvider'; // Adjust path as needed

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MyProvider>
      <App />
    </MyProvider>
  </React.StrictMode>
);
