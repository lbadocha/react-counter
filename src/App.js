import React from 'react';
import './App.css';


import Heading from './Heading';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading text='Nagłówek 1' classColor="color-green" />
        <Heading text='Licznik React' classColor="color-white"/>
        <Heading text='Kontakt' classColor="color-red"/>
      </header>

      <Counter initValue={8} />
      <Counter initValue={13} />
      <Counter initValue={105} />
    </div>
    
  );
}

export default App;
