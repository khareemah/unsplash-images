import { createContext, useContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

const AppContext = createContext(useContext);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppContext.Provider>
    <App />
  </AppContext.Provider>
);
