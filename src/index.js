import { render } from 'react-dom';
import { StrictMode } from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/App';

import './global.css';

render(
  <StrictMode>
    <Router>
      <ToastContainer hideProgressBar position="bottom-right" pauseOnFocusLoss={true} />
      <App />
    </Router>
  </StrictMode>,
  document.getElementById('root')
);
