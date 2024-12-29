import React, { useState, useEffect } from "react";

function App() {

  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(`https://last-airbender-api.fly.dev/api/v1/characters`)
      .then(response => response.json())
      .then(json => {
        json.splice(7);
        setData(json)
      })
  }, [])

  if (!data){
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>ATLA - Memory Game</h1>
      <div className="" id="container">
        { data && (
        <ul>
        {data.map((item) => {
          return(
            <li key={item._id}>
              <img src={item.photoUrl} alt="" />
            </li>
        )})}
        </ul>
      )}

      </div>
    </div>
  )
}

export default App;