import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'

function App() {
  const [beanResponse, setBeanResponse] = useState({})

  // fetch from back end
  async function fetchBeans(){
    let beanResponse = await fetch(
      "http://127.0.0.1:5000/beans"
    )
    let beanData = await beanResponse.json()

    //storing the response
    setBeanResponse(beanData)
    console.log(beanData)
  }
//  let favoriteFruitVeggieObject = { // curly bracket open
//   fruit: banana, // key then colon then value
//   vegetable: carrot // seperated by commas
//  } // closing curly bracket

 // banana == favoriteFruitVeggieObject.fruit
 // carrot == favoriteFruitVeggieObject.vegetable

 // favoriteFruitVeggieObject[fruit]
// beanResponse.goodness == 
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Press button below for beanData</p>
        <button onClick={fetchBeans}>fetch bean json</button>
        <h1>The value of the food key is {beanResponse.food}</h1>
        <a
          className="App-link"
          href="http://localhost:5000/beans"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
