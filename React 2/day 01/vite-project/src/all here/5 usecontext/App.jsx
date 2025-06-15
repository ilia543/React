import React from 'react';
import { createContext } from 'react';
import Comp1 from './Comp1';

export const nameC = React.createContext();
export const ageC = React.createContext();
export const objH = createContext();

function App() {
  const name = "ilia";
  const age = 16;
  const lst = ["h", "e", "l", "l", "o"];
  const lst1 = ["w", "o", "r", "l", 'd'];

  return (
    <>
      <nameC.Provider value={name}>
        <ageC.Provider value={age}>
          <objH.Provider value={{lst, lst1}}>
            <Comp1 />
          </objH.Provider>
        </ageC.Provider>
      </nameC.Provider>
    </>
  );
};

export default App;