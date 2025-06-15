import { useState } from 'react'
import './App.css'

function Mains() {
    const [ingredients, setIngredients] = useState([]);
  
    const ingredientsList = ingredients.map((el) => (<li key={el}>{el}</li>));
  
    function ingredientsubmit(formData) {
      let newingredient = formData.get("ingredient")
      setIngredients(prevIng => [...prevIng, newingredient]);
    }
  
    return (
      <>
        <main>
          <form action={ingredientsubmit} className='flex flex-wrap justify-center mt-8'>
            <input
              type="text"
              placeholder='e.g. oregano'
              aria-label='add ingredient'
              className='border-2 rounded-lg w-64'
              id='inpeng'
              name='ingredient'
            />
            <button id='addengbut' type='submit' className='bg-black text-white rounded-lg w-32 ml-1'>Add Ingredient</button>
          </form>
          <ul>{ingredientsList}</ul>
        </main>
      </>
    );
  }

export default Mains