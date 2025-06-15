import React from "react";

function App2() {
    const [starWarsData, setStarWarsData] = React.useState([]);
    const [count, setCount] = React.useState(0);

    console.log("Rendered!");
    React.useEffect(() => {
        console.log("Effect ran")
        // fetch("https://swapi.dev/api/people/1")
        //     .then(res => res.json())
        //     .then(data => setStarWarsData(data));
    }, [count]);
    
    return (
        <div>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
        </div>
    );
};

export default App2