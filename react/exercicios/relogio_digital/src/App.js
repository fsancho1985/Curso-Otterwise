import React, { useEffect, useState } from "react"
import './App.css';

const date = new Date() 

function App() {
  const [dateTime, setDateTime] = useState({
    hrs: date.getHours(),
    min: date.getMinutes(),
    sec: date.getSeconds()
})
useEffect(() => {
  const timer = setInterval(() => {
      const date = new Date()
      setDateTime({
          hrs: date.getHours(),
          min: date.getMinutes(),
          sec: date.getSeconds()
      })
  }, 1000)
  return () => clearInterval(timer)
}, [])
  return (
    <div className="App">
      {dateTime.hrs}:{dateTime.min}:{dateTime.sec} 
    </div>
  );
}

export default App;
