import './App.css'

function Buttonr(){

    const handleClick = () =>{
        alert("hi")
    }

    return(
        <>
            <button className='border-2' onClick={handleClick}>click me</button>
        </>
    )
}

export default Buttonr