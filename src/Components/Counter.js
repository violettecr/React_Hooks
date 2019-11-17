import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState();

  function handleCountChange(event) {
    setCount(Number(event.target.value))
  }

  return (
    <div>
      <p>Initialiser le compteur à : 
        <input
          type="number"
					onChange={handleCountChange}
        /> 
      </p>
      <p>Valeur du compteur : {count}</p>
      <button onClick={() => setCount(count + 1)}>
				+1
			</button>
			<button onClick={() => setCount(count - 1)}>
				-1
			</button>
    </div>
  );
}

export default Counter;