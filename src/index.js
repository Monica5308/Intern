import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
  
);
//  const app = require('express')
//  const path = require('path')

//  const Razorpay = require('razorpay')

//  const razorpay = new Razorpay({
//   key_id: 'rzp_test_AwcPc39fStegOy',
//   key_secret: 'FxrWo7LaEexUIAalAvSYrkzb',
// });


//  app.post('/razorpay', async (req, res) => {
   
//     const payment_capture = 1
//     const amount = 5
//     const currency = 'INR'

//   razorpay.orders.create({ 
//     amount: (amount * 100).toString(), 
//     currency, 
//     receipt: ,
//      payment_capture
//      })
//  })

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
