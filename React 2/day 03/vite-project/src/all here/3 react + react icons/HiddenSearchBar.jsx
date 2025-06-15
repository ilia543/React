import React from 'react';
import "./HiddenSearchBar.css";
import { FaSearch } from "react-icons/fa"

function HiddenSearchBar() {
    const [showInput, setShowInput] = React.useState(false);

    const [bgColor, setBgColor] = React.useState("white");


    const handleClick = (el) => {
        setBgColor("#1a1a1a")

        if(el.target.className === "container"){
            setShowInput(false);
            setBgColor("white");
        };
    };


  return (
    <>
        <section 
        className='container'
        style={{backgroundColor: bgColor}}
        onClick={handleClick}
        >
            {showInput ? (
                <input type="text" placeholder='Search...' className='inptxt' />
            ) : (
                <FaSearch onClick={() => setShowInput(true)}/>
            )}
        </section>
    </>
  );
};

export default HiddenSearchBar;