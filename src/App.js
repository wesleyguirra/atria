import React, { useState, useEffect } from "react";

function App() {
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    setInterval(() => {
      if (timer > 0) {
        setTimer((timer) => timer - 1);
      }
    }, 1000);
  }, []);

  return <p>{timer}</p>;
}

export default App;
