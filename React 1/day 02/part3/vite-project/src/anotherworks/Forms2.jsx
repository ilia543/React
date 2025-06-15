import { useState } from 'react'
import './App.css'

function Forms2() {
  // const [count, setCount] = useState(0)

  // here is mooor easyer way to control forms
  // const [comments, setcomments] = useState([])

  // const comms = comments.map((el, index) => <li key={index}>{el}</li>)

  function submitform(formData){
    const objform = Object.fromEntries(formData)
    const checkboxes = formData.getAll('checkboxes')
    // console.log(objform, checkboxes)

    const alldata = {
      ...objform,
      checkboxes
    }
    console.log(alldata)
  }

  return (
    <>
      <section>
        {/* <h1 className='text-6xl'>form</h1> */}
        <form action={submitform}>

          <label htmlFor="email">Email:</label>
          <input type="email"
            id='email' 
            name='email'
            placeholder='neter email'
            className='border-2 rounded'
          /><br/>

          <label htmlFor="password">password:</label>
          <input type="password" 
            name="password" 
            id="password"
            placeholder='password'
            className='border-2 rounded'
          /><br/>

          <label htmlFor="text">comment:</label>
          <input type="text"
            id='text' 
            name='text'
            placeholder='neter comment'
            className='border-2 rounded'
          /><br/>



          <fieldset className='border-2 ml-1 w-32'>
            <legend className='ml-4'>radios</legend>
            <input defaultChecked={true} type="radio" name="radios" id="radio1" value="radio1"/>
            <label htmlFor="radio1">radio1</label><br/>

            <input type="radio" name="radios" id="radio2" value="radio2"/>
            <label htmlFor="radio2">radio2</label><br/>

            <input type="radio" name="radios" id="radio3" value="radio3"/>
            <label htmlFor="radio3">radio3</label><br/>
          </fieldset>


          <fieldset className='border-2 ml-1 w-32'>
            <legend className='ml-4'>checkboxes</legend>
            <label>
              <input defaultChecked={true} type="checkbox" name="checkboxes" value="checkbox1" id="checkbox1" />
              checkbox1
            </label><br />

            <label>
              <input type="checkbox" name="checkboxes" id="checkbox2" value="checkbox2" />
              checkbox2
            </label><br />
            
            <label>
              <input type="checkbox" name="checkboxes" id="checkbox3" value="checkbox3" />
              checkbox3
            </label>
          </fieldset>

          <select name="favColor" id="favColor">
            <option value="red">red</option>
            <option value="green">green</option>
            <option value="black">black</option>
            <option value="yellow">yellow</option>
            <option value="blue">blue</option>
            <option value="pink">pink</option>
          </select><br />

          <button className='border-2 rounded'>submit</button>

          {/* <ul id='commentsul'>{comms}</ul> */}
        </form>
      </section>
    </>
  )
}

export default Forms2