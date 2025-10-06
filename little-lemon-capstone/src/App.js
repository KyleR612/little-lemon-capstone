import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Index from './index';

function App() {
  return (
   <>
   <Nav />
   <Header />
   <Footer />
   <Main />
   <Index />
   </>
   
  );
}
export default App;
