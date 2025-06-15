import { nameC } from './App';
import { ageC } from './App';
import { objH } from './App';
import { useContext } from 'react';

function Comp1() {
  const name = useContext(nameC);
  const age = useContext(ageC);

  const helloworld = (() => {
    const use = useContext(objH);
    let res = "";

    for (let i in use) {
      
      for (let j of use[i]) {
        res += j;
      };
    };
    
    return res;
  });

  return (
    <>
      <p>{name}, {age}</p>
      <br />
      <br />
      <p>{helloworld()}</p>
    </>
  );
};

export default Comp1;