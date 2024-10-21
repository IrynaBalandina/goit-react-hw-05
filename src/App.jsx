

import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
function App() {


  return (
   <div>
    <Routes>
          <Route path="/" element={<HomePage />} />
      <Route path="/movies" element = {<MoviesPage/>}/>
       
        
        </Routes>
    
   </div>
  )
}

export default App;
