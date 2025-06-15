import React from 'react';

function User1({name, age, isSigma}: {name: string; age: number; isSigma: boolean}) {
  return (
    <>
        <div>----------------</div>
        <p>{name}</p>
        <p>{age}</p>
        <p>{String(isSigma)}</p>
    </>
  );
};

export default User1;