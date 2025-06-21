import React, { useState, useEffect, useRef } from "react";

const Ref = () => {
    const [count, setCount] = useState(0);
    const value = useRef();

    const handleIncrement = () => { 
        setCount(count + 1);
    };

    useEffect(() => {
        console.log("Count has been updated to:", count);
        value.current = `Current count is: ${count}`;
    }, [count]); 

    return (
        <div>
            <h1>Ref Hook Example</h1>
            <p>Count: {count}</p>
            <button onClick={handleIncrement}>Increment</button>
            <h1>{value.current}</h1>
        </div>
    );
};

export default Ref;