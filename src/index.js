import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import qs from 'qs';
import reportWebVitals from './reportWebVitals';
import FetchUtils from './utils/FetchUtil';
import wx from 'weixin-js-sdk'
const urlParams = qs.parse((window.location.href.split('?')[1] || '').split('#')[0], { ignoreQueryPrefix: true })
const {
  domain,
  token
} = urlParams
FetchUtils.init({
  domain,
  token
});
React.$FetchUtils = FetchUtils
React.$wx = wx
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
// function tick(){
//   ReactDOM.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>,
//     document.getElementById('root')
//   );
//   requestAnimationFrame(() => {
//     tick()
//   });
// }
// requestAnimationFrame(tick)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
