import React from 'react';
import { Navbar, Main, Menu, OrderingArea, Footer } from './components';

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Main />
        <Menu />
        <OrderingArea />
        <Footer />
      </div>
    </>
  );
}

export default App;