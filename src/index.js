import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// ReactDOM.render(
  
//     <App />,
  
//   document.getElementById('root')
// );

const loader = document.querySelector('.loader');

// if you want to show the loader when React loads data again
const showLoader = () => loader.classList.remove('loader--hide');

const hideLoader = () => loader.classList.add('loader--hide');

setTimeout(() => 
  // the show/hide functions are passed as props
  ReactDOM.render(
    <App
      hideLoader={hideLoader}
      showLoader={showLoader} 
      />,
    document.getElementById('root')
  )
, 2000);
