import React from 'react';

interface Username{
    name: string;
    age: number;
    isSigma: boolean
};

function User3({name, age, isSigma}: Username) {
  return (
    <>
    <div>----------------</div>
        <p>{name}</p>
        <p>{age}</p>
        <p>{String(isSigma)}</p>
    </>
  );
};

export default User3;