import { useState } from "react"
import "./App.css"

function Ifelsenireturnelements(){
    const [lst, setlst] = useState([1, 4, 16, 245, "name", "namenamename"])


    return(
        <>
        {lst.length < 10 && <p>length of list is smaller than 10</p>} {/*true*/}
        {lst.includes(4) && <p> in this list is number 4</p>} {/*true*/}

        {lst.includes('surname') && <p> in this list is surname</p>} {/*false*/}

        {lst.length === 100 || <p>list length = 100 "or" this paragraph is lying</p>}{/*true*/}


        {0 < 4 ? <p>0 small than 4 is true</p> : <p>0 small than 4 is false</p>}{/*true*/}
        {15 > 6 ? <p>15 is bigger than 6</p> : <p>15 is not bigger than 6</p>}{/*true*/}

        {10 !== 10 ? <p>10 is equal to 10</p> : <p>10 is not equal to 10</p>}{/*false*/}
        </>
    )
}

export default Ifelsenireturnelements