import { useState } from 'react'
import './App.css'

function Body(props) {

    let message = ""

    if (props.age < 18){
        message = "You are not an adult"
    }else{
        message = "You are an adult"
    }

  return (
    <>
        <h1>body, hello {props.UserName}</h1>
        <p className='text-xl'>{message}</p>
    </>
  )
}

export default Body