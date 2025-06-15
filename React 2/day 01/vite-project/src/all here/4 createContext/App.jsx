import { createContext } from 'react';
import Component1 from './Component1';
import Component2 from './Component2';


export const Data = createContext();
export const Data1 = createContext();

function App() {
    const name = "ilia";
    const age = 16;
    const programmer = true

  return (
    <Data.Provider value={{name, age}}>
      
        <Data1.Provider value={programmer}>
          <Component2 />
        </Data1.Provider>
        <br />
        <br />
        <Component1 />
    </Data.Provider>
  )
}

export default App;