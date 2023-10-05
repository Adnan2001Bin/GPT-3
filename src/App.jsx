import { useState } from 'react'
import './App.css'

import { Footer , Blog , Possibility , Features , Header , WhatGPT3 } from './containers';
import { Navbar , CTA , Brand } from './components';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>

      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App;

