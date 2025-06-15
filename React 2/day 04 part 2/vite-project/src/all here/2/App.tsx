import React from 'react';
import './App.css';
import Button from './Button';

function App() {

  return (
    <>
    <Button label={"click"} onClick={() => console.log("clicked")} disabled={false} />
    </>
  );
};

export default App;