import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ScrollTop from './ScrollTop'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
<ScrollTop />
<App/>
  </BrowserRouter>

);


