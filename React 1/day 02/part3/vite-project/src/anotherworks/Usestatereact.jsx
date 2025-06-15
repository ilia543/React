import { useState } from 'react'
import './App.css'

function Usestatereact() {
  const [person, setperson] = useState({
    name: "ilia",
    age: 16,
    isfavorite: true
  });
  let favorit =  person.isfavorite ? "favorite" : "not favorite";

  function fav() {
    setperson(prevPerson => {
      return {...prevPerson, isfavorite: !(prevPerson.isfavorite)};
    });
  }

  return (
    <>
      <div>
        <p>{person.name} is {favorit}</p>
        <button className='border-2' onClick={fav}>click if {person.name} is not favorit</button>
      </div>
    </>
  )
}

export default Usestatereact