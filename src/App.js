import React from 'react';

import Header from './components/layout/Header/Header';
import Sidebar from './components/layout/Sidebar/Sidebar';
import Main from './components/layout/Main/Main';
import Footer from './components/layout/Footer/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Main />
      <Footer />
    </>
  );
};

export default App;
