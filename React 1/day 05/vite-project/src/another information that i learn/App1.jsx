import './App.css'
import React from 'react'

function App1() {
    const [url, setUrl] = React.useState("")
    const [memeUrl, setMemeUrl] = React.useState("")

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes").then(res => res.json()).then(data => {

            setUrl(data.data.memes)

        })
    })

    function meme(){
        let randomMeme = Math.floor(Math.random() * 99)

        setMemeUrl(url[randomMeme].url)
    }


    return (
        <>
            <div>
                {/* <pre>{JSON.stringify({ name: "Ilia" }, null, 2)}</pre> */}

                <button onClick={meme} className='w-[240px] h-[90px] border-4 rounded-xl border-black text-4xl font-bold '>click for meme</button><br/><br/>

                {memeUrl && <img src={memeUrl} alt="Meme" className='max-w-[500px]'/>}
            </div>
        </>
    )
}

export default App1