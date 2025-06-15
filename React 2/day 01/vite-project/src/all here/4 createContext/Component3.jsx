import React from 'react';
import { Data } from './App';
import { Data1 } from './App';

function Component3() {
  return (
    <>
      <Data.Consumer>
        {({name, age}) => {
            return <p>{name}, {age}</p>
        }}
      </Data.Consumer>

      <Data1.Consumer>
        {(el) => {
          return el ? <p>he is programmist</p> : <p>he isnt programmist</p>
        }}
      </Data1.Consumer>

    </>
  );
};

export default Component3;