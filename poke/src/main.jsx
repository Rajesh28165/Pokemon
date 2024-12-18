import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)





// import { useState } from "react";
// import "./App.css";
// import superheroes from "./data.js";

// function App() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   function showData(index) {
//     setCurrentIndex(index);
//   }

//   function handlePrevious() {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//     }
//   }

//   function handleNext() {
//     if (currentIndex < superheroes.length - 1) {
//       setCurrentIndex(currentIndex + 1);
//     }
//   }

//   return (
//     <div className="App">
//       <h1>Superhero Selector</h1>
      
//       <select
//         value={superheroes[currentIndex].name}
//         onChange={(e) =>
//           showData(superheroes.findIndex((hero) => hero.name === e.target.value))
//         }
//       >
//         {superheroes.map((hero, index) => (
//           <option key={index} value={hero.name}>
//             {hero.name}
//           </option>
//         ))}
//       </select>

//       <div className="hero-details">
//         <h2>{superheroes[currentIndex].name}</h2>
//         <img
//           src={superheroes[currentIndex].image}
//           alt={superheroes[currentIndex].name}
//           className="hero-image"
//         />
//         <p>{superheroes[currentIndex].description}</p>
//       </div>

//       <button onClick={handlePrevious} disabled={currentIndex === 0}>
//         Previous
//       </button>
//       <button
//         onClick={handleNext}
//         disabled={currentIndex === superheroes.length - 1}
//       >
//         Next
//       </button>
//     </div>
//   );
// }

// export default App;