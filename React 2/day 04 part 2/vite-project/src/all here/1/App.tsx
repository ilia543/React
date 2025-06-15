import React from 'react';
import User from './User';
import User1 from './User1';
import User2 from './User2';
import User3 from './User3';
import User4 from './User4';
import User5 from './User5';
import './App.css';

function App() {

  return (
    <>
      <User name={"ilia"} age={16} isSigma={true}/>
      <User1 name={"ilia"} age={16} isSigma={true}/>
      <User2 name={"ilia"} age={16} isSigma={true}/>
      <User3 name={"ilia"} age={16} isSigma={true}/>

      <User4>
        <p>hello</p>
      </User4>

      <User5 name={"ilia"} age={16} isSigma={true}/>
    </>
  );
};

export default App;