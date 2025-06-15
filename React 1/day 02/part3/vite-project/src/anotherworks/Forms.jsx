import { useState } from 'react'
import './App.css'

function Forms() {
  // const [count, setCount] = useState(0)

  function submitform(event){
    event.preventDefault()
    const formEl = event.currentTarget
    const formData = new FormData(formEl)
    const email = formData.get("email")
    const password = formData.get("password")
    formEl.reset()
  }

  return (
    <>
      <section>
        <h1 className='text-6xl'>form</h1>
        <form onSubmit={submitform} action="">

          <label htmlFor="email">Email:</label>
          <input type="email"
            id='email' 
            name='email'
            placeholder='neter email'
            className='border-2 rounded'
          />

          <label htmlFor="password">password:</label>
          <input type="password" 
            name="password" 
            id="password"
            placeholder='password'
            className='border-2 rounded'
          />

          <button className='border-2 rounded'>submit</button>
        </form>
      </section>
    </>
  )
}

export default Forms