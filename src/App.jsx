
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nabar from './components/Nabar';
import Body from './components/Body';


function App() {
  

  return (
   
    <div className="App">
      <Nabar/>
    <Router>
      <Routes>
      <Route exact path='' element={<Body/>} />
      <Route />
      </Routes>
    </Router>
</div>
  )
}

export default App
