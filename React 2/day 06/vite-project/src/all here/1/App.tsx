import './App.css';
import { useState, useEffect } from 'react';

interface User{
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setlLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchUsers = async () => {
      try {

        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if(!res.ok) throw new Error("error");
        const data: User[] = await res.json();

        setUsers(data);

      } catch (error) {
        setError(error instanceof Error ? error.message : "An error");
      }finally{
        setlLoading(false);
      };
    };

    fetchUsers();
  }, []);

  if(loading) return <h1>Loading...</h1>
  if(error) return <h1>error: {error}</h1>

  return (
    <>
    {users.map(user => (
      <div className='border-2'>
        <p>{user.id}</p>
        <p>{user.name}</p>
        <p>{user.username}</p>
        <p>{user.email}</p>
        <p>{user.phone}</p>
      </div>
    ))}
    </>
  );
};

export default App;