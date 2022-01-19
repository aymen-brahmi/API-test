
import './App.css';
import Axios from 'axios';
import {useState} from 'react';
function App() {
const [joke,setJoke]=useState("")
const getJokes=()=>{
Axios.get("https://api.chucknorris.io/jokes/random")
.then ((response)=>{
  setJoke(response.data.id)
} )

}

  return (
    <div className="App">
    <h1>We Will use Axios</h1>
    <button onClick={getJokes} >console.log</button>
    <h2>{joke}</h2>
    </div>
  );
}

export default App;


//https://api.chucknorris.io/jokes/random
//https://jsonplaceholder.typicode.com/users