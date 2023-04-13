import { Component } from 'react';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
   <>
    <Header title='Horned Beasts'/>
    <Main />
    <Footer title='Your opinion counts!'/>
   </>
  );
}

export default App;