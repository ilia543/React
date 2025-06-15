import React, { type ReactNode } from 'react';

interface Username{
    children: ReactNode;
};

function User4({ children }: Username) {
  return (
    <>
    <div>----------------</div>
        <h1>{children}</h1>
    </>
  );
};

export default User4;