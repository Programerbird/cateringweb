
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nabar from './components/Nabar';
import  Home  from './components/Home';
import  Menu  from './components/Menu';
import Body from './components/Body';
import BoxedMeals from './components/BoxedMeals';
import Wedding from './components/Wedding';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App">
      <Router>
        <Nabar />

        <Routes>
          <Route exact path='/home' element={<Home />} />
          <Route path='/menu' element={<Menu />} /> 
          <Route path='/boxed-meals' element={<BoxedMeals />} /> 
          <Route path='/wedding' element={<Wedding />} /> 
          <Route path='/gallery' element={<Gallery />} /> 
          {/* <Route  path='/contact' element={<Contact/>} />  */}
        </Routes>

      </Router>
    </div>
  )
}

export default App
