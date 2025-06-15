import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {

    async function getData() {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await response.json();

      if (data && data.length) setData(data);
    }

    getData();
  });

  return (
    <>
      <ul>
        {data.map(el => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    </>
  );
}

export default App;

