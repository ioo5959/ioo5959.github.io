import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './ProductList'; //상품 목록 페이지
import CardPayment from './CardPayment';



function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" exact component={ProductList} />
        <Route path="/payment" component={CardPayment} />
      </Routes>
    </Router>
  );
}

export default App;
