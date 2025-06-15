import React from "react";

function App3(){
    const [meme, setMeme] = React.useState({
        topText: "top",
        bottomText: "bottom",
        memeImg: "https://api.imgflip.com/get_memes"
    });
    const [allMemes, setAllMemes] = React.useState([]);

    React.useEffect(async () => {
        const res = await fetch("https://api.imgflip.com/get_memes");
        const data = await res.json();
        setAllMemes(data.data.memes);
    }, [])


    return (
        <>
            <div></div>
        </>
    );
};


export default App3