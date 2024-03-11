import './App.css'


//Import Routes and pages
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Starships from './pages/Starships';


function App() {

  return (
    <>
      <div className="App">
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/starships' element={<Starships />} />
        </Routes>
      </div>
    </>
  )
}

export default App
