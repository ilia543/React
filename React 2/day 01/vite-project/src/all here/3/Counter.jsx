import React from "react";


function Counter(){
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        document.title = `count: ${count}`
        console.log("hi")
    });

    function countInc(){
        setCount(pr => pr + 1);
    };

    return (
        <>
            <h1>count : {count}</h1>
            <button onClick={countInc}>click to increment</button>
        </>
    );
};


export default Counter;