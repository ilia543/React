import React from 'react';
import axios from "axios";
import "./Meals.css"

function Meals() {

const [items, setItems] = React.useState([]);

React.useEffect(() => {
  axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        setItems(res.data.meals);
      }).catch(err => {
        console.lof(err);
      });

}, [])


  return (
    <>
      <div className='divp'>
        {items.map(({strMeal, strMealThumb, idMeal}) => {

          return(
            <section key={idMeal} className="flex flex-col items-center m-4">
              <img className="w-32 rounded shadow" src={strMealThumb} alt={strMeal} />
              <p className="mt-2 text-center font-medium">{strMeal}</p>
            </section>
          );
        })}
      </div>
    </>
  );
};

export default Meals;