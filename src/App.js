import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './app/store';
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
