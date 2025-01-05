import React, { useState, useEffect } from "react";
import './App.css';

function App() {

  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(`https://last-airbender-api.fly.dev/api/v1/characters`)
      .then(response => response.json())
      .then(json => {
        json.splice(6);
        setData(json)
      })
  }, [])

  function tester(){
    console.log("hello")
  }

  if (!data){
    return <div>Loading...</div>
  }

  return (
    <div className="p-14">
    <h1 className="text-center text-lg font-bold pb-8">ATLA - Memory Game</h1>
    <div className="grid grid-cols-2 grid-rows-3 gap-6">
        { data.map((item) => {
          return(
            <div key={item._id} className="p-4 rounded bg-gray-200 items" onClick={tester}>
              <img src={item.photoUrl} alt="" className="w-full h-auto rounded cursor-pointer "/>
            </div>
        )})}
      </div>
    </div>
  )
}

export default App;