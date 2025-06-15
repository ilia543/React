import { useState } from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import './AppColorOnClick.css'

function AppColorOnClick(){
    const [r, setr] = useState(0)
    const [g, setg] = useState(0)
    const [b, setb] = useState(0)
    const [color, setcolor] = useState('')

    let divbgcolor = useRef()

    function generatecolor(formData){
        let rv = Number(formData.get("r"))
        let gv = Number(formData.get("g"))
        let bv = Number(formData.get("b"))

        setr(rv.toString(16))
        setg(gv.toString(16))
        setb(bv.toString(16))

        if(String(r).length < 2){
            setr("0" + rv)
          }
        if(String(g).length < 2){
            setg("0" + gv)
        }
        if(String(b).length < 2){
            setb("0" + bv)
        }
        
        if(rv <= 0){
            setr("00")
        }else if(rv >= 255){
            setr("ff")
        }
        if(gv <= 0){
            setg("00")
        }else if(gv >= 255){
            setg("ff")
        }
        if(bv <= 0){
            setb("00")
        }else if(bv >= 255){
            setb("ff")
        }

        setcolor(`#${r}${g}${b}`)
        console.log(color)
    }

    return(
        <>
            <form action={generatecolor}>
                <label>
                    first number(r):
                    <input type="number" name="r" id="r" className='border-2 rounded'/>
                </label><br />
                <label>
                    second number(g):
                    <input type="number" name="g" id="g" className='border-2 rounded'/>
                </label><br />
                <label>
                    third number(b):
                    <input type="number" name="b" id="b" className='border-2 rounded'/>
                </label><br />
                <button type='submit' className='border-2 rounded'>click to generate color</button>
            </form><br />
            <div ref={divbgcolor} className='border-2 w-96 h-96' style={{ backgroundColor: color }}></div>
        </>
    )
}

export default AppColorOnClick