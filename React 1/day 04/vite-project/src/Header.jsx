import { useState } from 'react'
import './App.css'

function Header(props) {


  return (
    <>
        <h1>header, hello {props.UserName}</h1>
    </>
  )
}

export default Header