import React from "react";
import "./Dies.css";

function Dies(props){

    const styleG = {
        backgroundColor: props.isHeld ? "#00ff00" : "white",
        boxShadow: props.isHeld ? "0px 0px 10px green" : "none"
    };


    return(
        <>
            <button 
                style={styleG} 
                className="dies"
                onClick={props.hold}
            >{props.value}</button>
        </>
    );
};

export default Dies;