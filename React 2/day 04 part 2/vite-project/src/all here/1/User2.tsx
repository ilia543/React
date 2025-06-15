import React from 'react';

type Username = {
    name: string;
    age: number;
    isSigma: boolean;
};

function User2({name, age, isSigma}: Username) {
  return (
    <>
    <div>----------------</div>
        <p>{name}</p>
        <p>{age}</p>
        <p>{String(isSigma)}</p>
    </>
  );
};

export default User2;