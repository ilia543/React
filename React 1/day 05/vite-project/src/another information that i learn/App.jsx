import { useState } from 'react'
import './App.css'

function App() {
  const [meme, setMeme] = useState({
    topText: "One",
    bottomText: "Two",
    imgUrl: "http://i.imgflip.com/lbij.jpg"
  })

  function textOnChange(event){
    const {value, name} = event.currentTarget
    setMeme(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <>
        <main>
            <div className="">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One"
                        name="topText"
                        onChange={textOnChange}
                        value={meme.topText}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Two"
                        name="bottomText"
                        onChange={textOnChange}
                        value={meme.bottomText}
                    />
                </label>

                <button>Get a new meme image</button>
            </div>

            <div className="">
                <img src="http://i.imgflip.com/lbij.jpg" />

                <span className="">{meme.topText}</span>
                <span className="">{meme.bottomText}</span>
            </div>
        </main>
    </>
  )
}

export default App
