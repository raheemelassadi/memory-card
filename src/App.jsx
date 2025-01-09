import React, { useState, useEffect } from "react";
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [score, setScore] = useState(0);
  const [lastClickedId, setLastClickedId] = useState(null); 

  // get api one time
  useEffect(() => {
    fetch(`https://last-airbender-api.fly.dev/api/v1/characters`)
      .then(response => response.json())
      .then(json => {
        setData(json.slice(0, 9)); 
      });
  }, []);

  // handle memory items on click
  // on click it resorts the items on the board
  // 
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

  // function that sends alert when game ends
  function gameOver(){
    alert("Game Over")
  }

  // if data hasnt loaded then return loading... on screen
  if (!data) {
    return <div>Loading...</div>;
  }

  //main content
  return (
    <div className="p-8 flex justify-center">
      
      <div className="">
      <div className="flex gap-4 justify-between">
        <div></div>
        {/* title */}
        <h1 className="text-center text-xl font-bold pb-8">ATLA - Memory Game</h1>
        {/* Score tracker */}
        <h3>Score: {score}</h3>
      </div>
      
      {/* map over the state and return img with id from Data */}
      <div className="grid grid-cols-3 grid-rows-3 gap-6">
        {data.map((item) => (
          <div key={item._id} className="p-4 rounded bg-gray-200 items" >
            <img src={item.photoUrl} alt="" className="w-full h-auto rounded cursor-pointer " onClick={() => handleClick(item._id)}/>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default App;