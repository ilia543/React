import './App.css'

function Plus({ setCount }){
    return <button onClick={() => setCount(p => p + 1)} className='border-2 w-16 h-16'>+</button>
}

export default Plus