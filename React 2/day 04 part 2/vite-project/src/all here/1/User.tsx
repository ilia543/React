import React from 'react';

function User(props: {name: string; age: number; isSigma: boolean}) {
  return (
    <>
        <p>{props.name}</p>
        <p>{props.age}</p>
        <p>{String(props.isSigma)}</p>
    </>
  );
};

export default User;