import React from 'react';
import { Counter } from './features/counter/Counter';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
// import { Storefront } from '@mui/icons-material';
import store from './app/store';
import Storefront from './components/storeFront/storeFront';
import Footer from './components/footer/footer';
import Details from './components/productDetails/details';
import Checkout from './components/cart/checkout';
import './App.css';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <Routes>
          <>
            <Route path='/' element={<Storefront />} />
            <Route path='/details' element={<Details />} />
            <Route path='/checkout' element={<Checkout />} />
          </>
        </Routes>
        <Footer />
      </Provider>
    </Router>

  );
}

export default App;
