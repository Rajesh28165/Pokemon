import { useState } from 'react'
import pokemons from './data.js'
import './App.css'

function App() {
  const [index, setIndex] = useState(0);

  function showData(index) {
    setIndex(index)
  }

  function handlePrevious(){
    if (index>0) {
      setIndex(index-1)
    }
  }

  function handleNext(){
    if (index<pokemons.length-1) {
      setIndex(index+1)
    }
  }

  return (

    <div className="App">

      <div className='container'>

        <h1>Pokemons</h1>

        <select value={pokemons[index].name}
          onChange={(e)=>showData(pokemons.findIndex(hero => hero.name===e.target.value))}>
          {pokemons.map((hero,index)=>(
            <option key={index} value={hero.name} >{hero.name}</option>
          ))}
        </select>

        <div className="poke-details">
          <h2>{pokemons[index].name}</h2>
          <img  src={pokemons[index].image} alt={pokemons[index].name} className="pokemonImage"/>
          <p>{pokemons[index].description}</p>
        </div>

        <div className='but'>
          <button onClick={handlePrevious} disabled={index===0}>Previous</button>
          <button onClick={handleNext} disabled={index===pokemons.length-1}>Next</button>
        </div>

      </div>

    </div>
  );
}

export default App;
