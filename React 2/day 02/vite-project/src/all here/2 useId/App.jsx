import React from 'react';

import { useId } from 'react';

function App() {
    const id = useId()
    const id1 = useId()

  return (
    <>
      <div>{id}</div>
      <div>{id}</div>
      <div>{id1}</div>
      <div>{useId()}</div>
      <div>{useId()}</div>
    </>
  );
};

export default App;