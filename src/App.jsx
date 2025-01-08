import React, { useState, useEffect } from "react";
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [score, setScore] = useState(0);
  const [lastClickedId, setLastClickedId] = useState(null); 

  useEffect(() => {
    fetch(`https://last-airbender-api.fly.dev/api/v1/characters`)
      .then(response => response.json())
      .then(json => {
        setData(json.slice(0, 6)); 
      });
  }, []);

  const handleClick = (itemId) => {
    // Create a new shuffled array to avoid batching issues
    const newData = [...data].sort(() => Math.random() - 0.5);
    setData(newData);

    // Check if the clicked card matches the last clicked card
    if (itemId != lastClickedId) {
      setScore(score + 1); // Increase score if it's a match
    } else {
      setScore(0)
      gameOver()
    }
    
    // Update lastClickedId for next click
    setLastClickedId(itemId); 
  };

  function gameOver(){
    alert("Game Over")
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-14">
      
      <div className="flex gap-4 justify-between">
        <div></div>
        <h1 className="text-center text-xl font-bold pb-8">ATLA - Memory Game</h1>
        <h3>Score: {score}</h3>
      </div>
      
      <div className="grid grid-cols-2 grid-rows-3 gap-6">
        {data.map((item) => (
          <div key={item._id} className="p-4 rounded bg-gray-200 items" >
            <img src={item.photoUrl} alt="" className="w-full h-auto rounded cursor-pointer " onClick={() => handleClick(item._id)}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;