import { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Contador: {count}</p>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
        </div>
    )

}

function CounterLet() {
    
    let count = 0;
  
    return (
      <div>
        <p>Contador: {count}</p>
        <button onClick={() => { count++; console.log(count); }}>Incrementar</button>
      </div>
    );
  }


// export default Counter
export default CounterLet