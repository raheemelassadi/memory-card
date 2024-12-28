import React, { useState, useEffect } from "react";

function App() {

  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(`https://last-airbender-api.fly.dev/api/v1/characters/avatar`)
      .then(response => response.json())
      .then(json => {
        json.splice(7);
        setData(json)
      })
  }, [])


  return (
    <div>
      <h1>ATLA - Memory Game</h1>
      <div className="" id="container">
        {JSON.stringify(data[0])}

        <img src={data[0].photoUrl} alt="" />
      </div>
    </div>
  )
}

export default App;