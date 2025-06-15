import React from "react";

function BasicEffect(){

    React.useEffect(() => {
        console.log("hello")
    });

    return (
        <>
            <h2>hi from another jsx</h2>
        </>
    );
};


export default BasicEffect;