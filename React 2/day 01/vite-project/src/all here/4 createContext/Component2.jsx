import React from 'react';
import Component3 from './Component3';
import { Data1 } from './App';

function Component2() {
  return (
    <>
      <Component3 />

      <Data1.Consumer>
        {(el) => {
            return <p>{String(el)}</p>
        }}
      </Data1.Consumer>
    </>
  );
};

export default Component2;