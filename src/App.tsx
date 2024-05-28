import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Header';
import './App.css'

function App() {
  const [selectedOption, setSelectedOption] = useState(0);
  const [voted, setVoted] = useState(false);
  

  return (
    <div className="App">
      <Header />
    </div>
    
  );
}


export default App
