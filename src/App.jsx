import React, { useState, useEffect } from "react";

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

  if (!data){
    return <div>Loading...</div>
  }

  return (
    <>
    <h1 className="">ATLA - Memory Game</h1>
    <div className="grid grid-cols-2 grid-rows-3 gap-4">
        { data && data.map((item) => {
          return(
            <div key={item._id} className="p-4 rounded bg-gray-200">
              <img src={item.photoUrl} alt="" className="w-full h-auto rounded cursor-pointer"/>
            </div>
        )})}

      </div>
    </>
  )
}

export default App;