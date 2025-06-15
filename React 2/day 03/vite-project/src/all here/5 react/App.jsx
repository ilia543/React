import React from 'react';
import './App.css';
import Accordions from './Accordions';
import { accordionData } from './utils/content';

function App() {


  return (
    <>
      <div className=' flex flex-col gap-4'>
        {accordionData.map(({title, content}, index) => (
          <Accordions title={title} content={content} index={index}/>
        ))}
      </div>
    </>
  );
};

export default App;