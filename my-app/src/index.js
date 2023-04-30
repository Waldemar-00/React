import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
// import reportWebVitals from './reportWebVitals';
const text = 'lorem ipsum dolor sit amet, consectetur adip'
const labelForInput = 'input'
const component = (
  <div>
    <h1 className="first">Hello World!</h1>
    <div>Text: {text}</div>
    <div>2 + 2 = { 2 + 2 }</div>
    <div>2 + 2 = {[4]}</div>
    <div>2 + 2 = {[2, 2]}</div>
    <div>2 + 2 = { +[ 2 ] + +[ 2 ] }</div>
    {/* <div>2 + 2 = { {4} }</div> WILL BE  ERROR*/}
    {/* <div>2 + 2 = { new Date() }</div> WILL BE  ERROR*/}
    <label htmlFor={labelForInput}>Write React </label>
    <input id='input' type="text" tabIndex="0"/>
    <button>BUTTON</button>
    <button />
  </div>
)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  component,
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
