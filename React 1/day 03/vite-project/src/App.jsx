import { useState } from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import './App.css'

function App() {
  const [difficultychose, setdifficultychose] = useState(4);
  const [gameboard, setgameboard] = useState([]);
  const [clickcount, setclickcount] = useState(0);
  const [clicklosecount, setclicklosecount] = useState(0);
  const [colordef, setcolordef] = useState(['bg-amber-500', 'bg-blue-700', 'bg-cyan-300', 'bg-emerald-900', 'bg-fuchsia-500', 'bg-gray-800', 'bg-green-400', 'bg-indigo-400', 'bg-amber-500', 'bg-blue-700', 'bg-cyan-300', 'bg-emerald-900', 'bg-fuchsia-500', 'bg-gray-800', 'bg-green-400', 'bg-indigo-400']);
  const [color4, setcolor4] = useState(['bg-amber-500', 'bg-blue-700', 'bg-cyan-300', 'bg-emerald-900', 'bg-fuchsia-500', 'bg-gray-800', 'bg-green-400', 'bg-indigo-400', 'bg-amber-500', 'bg-blue-700', 'bg-cyan-300', 'bg-emerald-900', 'bg-fuchsia-500', 'bg-gray-800', 'bg-green-400', 'bg-indigo-400']);
  const [color6, setcolor6] = useState(['bg-amber-500', 'bg-blue-700', 'bg-cyan-300', 'bg-emerald-900', 'bg-fuchsia-500', 'bg-gray-800', 'bg-green-400', 'bg-indigo-400', 'bg-amber-500', 'bg-blue-700', 'bg-cyan-300', 'bg-emerald-900', 'bg-fuchsia-500', 'bg-gray-800', 'bg-green-400', 'bg-indigo-400',          'bg-lime-200', 'bg-neutral-200', 'bg-orange-500', 'bg-pink-500', 'bg-amber-300', 'bg-purple-900', 'bg-red-700', 'bg-sky-800', 'bg-slate-200', 'bg-lime-200', 'bg-neutral-200', 'bg-orange-500', 'bg-pink-500', 'bg-amber-300', 'bg-purple-900', 'bg-red-700', 'bg-sky-800', 'bg-slate-200']);
  const [color8, setcolor8] = useState(['bg-amber-500', 'bg-blue-700', 'bg-cyan-300', 'bg-emerald-900', 'bg-fuchsia-500', 'bg-gray-800', 'bg-green-400', 'bg-indigo-400', 'bg-amber-500', 'bg-blue-700', 'bg-cyan-300', 'bg-emerald-900', 'bg-fuchsia-500', 'bg-gray-800', 'bg-green-400', 'bg-indigo-400',          'bg-lime-200', 'bg-neutral-200', 'bg-orange-500', 'bg-pink-500', 'bg-amber-300', 'bg-purple-900', 'bg-red-700', 'bg-sky-800', 'bg-slate-200', 'bg-lime-200', 'bg-neutral-200', 'bg-orange-500', 'bg-pink-500', 'bg-amber-300', 'bg-purple-900', 'bg-red-700', 'bg-sky-800', 'bg-slate-200', 'bg-lime-200', 'bg-neutral-200', 'bg-orange-500', 'bg-pink-500', 'bg-amber-300', 'bg-purple-900', 'bg-red-700', 'bg-sky-800', 'bg-slate-200', 'bg-lime-200', 'bg-neutral-200', 'bg-orange-500', 'bg-pink-500', 'bg-amber-300', 'bg-purple-900', 'bg-red-700', 'bg-sky-800', 'bg-slate-200', 'bg-amber-500', 'bg-blue-700', 'bg-cyan-300', 'bg-emerald-900', 'bg-fuchsia-500', 'bg-gray-800', 'bg-amber-500', 'bg-blue-700', 'bg-cyan-300', 'bg-emerald-900', 'bg-fuchsia-500', 'bg-gray-800']);

  useEffect(() => {
    if (difficultychose === 6) {
      setcolor4([...color6]);
    }else if( difficultychose === 4){
      setcolor4([...colordef]);
    }else if( difficultychose === 8){
      setcolor4([...color8]);
    }
  }, [difficultychose]);


  let randomColorCounter = 0;

  
  let color4arr = [...color4];

  let color4box = [];
  for(let i = 0; i < color4.length; i++){
    let randomcolor = Math.floor(Math.random() * color4arr.length);
    color4box.push(color4arr[randomcolor]);
    color4arr.splice(randomcolor, 1);
  }

  const easy = useRef(null)
  const normal = useRef(null)
  const hard = useRef(null)

  const generateBtnRef = useRef(null);
  
  const board = useRef(null);

  const losetext = useRef(null);

  function gameboardfunc(el) {
    el.target.classList.add('pointer-events-none');
    el.target.classList.add('opacity-50');

    easy.current.classList.add('pointer-events-none', 'opacity-50');
    normal.current.classList.add('pointer-events-none', 'opacity-50');
    hard.current.classList.add('pointer-events-none', 'opacity-50');

    const newBoard = [];

    for (let i = 0; i < difficultychose; i++) {
      const rowBoxes = [];

      for (let j = 0; j < difficultychose; j++) {
        
        rowBoxes.push(<div key={`box-${i}-${j}`} onClick={clickcountfunc} className={`border-2 w-16 h-16 ${color4box[randomColorCounter]} boxwhite`} id={`box${i}${j}`}></div>);
        randomColorCounter+= 1;
      }

      newBoard.push(<div key={`row-${i}`} className="flex">{rowBoxes}</div>);
    }

    setgameboard(newBoard);
  }

  let prevel = null;

  function clickcountfunc(el) {
    setclickcount(prev => {
      const newCount = prev + 1;

      el.target.classList.add("scaleanim")
      setTimeout(() => {
        el.target.classList.remove('boxwhite');
      }, 200);
      setTimeout(() => {
        el.target.classList.remove("scaleanim");
      }, 400);

  
      if (newCount === 1) {
        prevel = el.target;
      }

      if (newCount === 2) {
        setTimeout(() => {
          if(prevel.id === el.target.id){
            el.target.classList.add('boxwhite');
            prevel.classList.add('boxwhite');
          }else{
            if(el.target.classList.value !== prevel.classList.value) {
              el.target.classList.add('boxwhite');
              prevel.classList.add('boxwhite');
            }else {
              el.target.classList.remove('boxwhite');
              el.target.classList.add('pointer-events-none');
              prevel.classList.add('pointer-events-none');
              prevel.classList.remove('boxwhite');
            }
          }

          prevel = null;
        }, 1000);

        board.current.classList.add('pointer-events-none');

        setTimeout(() => {
          board.current.classList.remove('pointer-events-none');
        }, 1000);

        setclickcount(0);
      }
  
      return newCount;
    });

    setclicklosecount(pr => {
      const newCount = pr + 1;

      if(newCount === 100){
        losetext.current.textContent = 'you lose!';
        setTimeout(() => {
          board.current.classList.add('pointer-events-none');
        }, 1001);
      }

      return newCount;
    })
  }



  function endgame(){
    generateBtnRef.current.classList.remove('pointer-events-none', 'opacity-50');
    board.current.classList.remove('pointer-events-none');

    easy.current.classList.remove('pointer-events-none', 'opacity-50');
    normal.current.classList.remove('pointer-events-none', 'opacity-50');
    hard.current.classList.remove('pointer-events-none', 'opacity-50');

    setclicklosecount(0);

    losetext.current.textContent = '';

    setgameboard([]);
    setdifficultychose(4);
  }

  return (
    <>
      <div className='flex w-[70%] justify-between'>
        <section className='mt-4 ml-4 w-[200px] h-64 flex flex-wrap justify-around items-center' id='difficultychose'>
          <button ref={easy} id='easy' onClick={() => setdifficultychose(4)} className='border-2 rounded-xl text-green-500 bg-black w-16 h-8'>easy</button>
          <button ref={normal} id='normal' onClick={() => setdifficultychose(6)} className='border-2 rounded-xl text-amber-500 bg-black w-16 h-8'>normal</button>
          <button ref={hard} id='hard' onClick={() => setdifficultychose(8)} className='border-2 rounded-xl text-red-500 bg-black w-16 h-8'>hard</button>

          <button ref={generateBtnRef} onClick={gameboardfunc} id='generateGameboard' className='border-2 rounded text-blue-500 bg-black w-48 h-12 font-bold'>Generate Gameboard</button>
          <button onClick={endgame} id='endgame' className='border-2 rounded-xl text-purple-500 bg-black w-32 h-8'>end game</button>
        </section>

        <div id="gameboard" ref={board} className='w-[512px] justify-self-center'>{gameboard}</div>
      </div>
      <p className='text-2xl ml-[610px]'>count: {clicklosecount}</p>
      <p ref={losetext} className='text-5xl text-red-700 font-bold ml-[540px]'></p>
    </>
  )
}

export default App