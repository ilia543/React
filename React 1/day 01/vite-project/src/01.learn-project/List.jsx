import { useState } from 'react';
import './App.css'

function List() {
    const fruits = [
        {id: 1, name: "apple", calories: 95},
        {id: 2, name: "orange", calories: 45},
        {id: 3, name: "banana", calories: 105},
        {id: 4, name: "coconut", calories: 159},
        {id: 5, name: "pineapple", calories: 37}
    ];
    fruits.sort((a, b) => {
        return a.calories - b.calories
    })

    const listItems = fruits.map((fruit) => {
        let goodcalorie = ""
        if(fruit.calories <= 100){
            goodcalorie = <span className=" text-green-600 font-bold"> {fruit.calories} </span>
        }else{
            goodcalorie = <span className=" text-red-600 font-bold"> {fruit.calories} </span>
        }

        return (
            <li key={fruit.id}>
                <b className="text-blue-600">{fruit.name}</b> :
                {goodcalorie}
                calories
            </li>
        )
    });

    return (
        <>
        <ol>{listItems}</ol>
        </>
    );
}

export default List;