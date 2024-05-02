import React from 'react'
import logo from '../images/logo.png'
import  Home  from './Home';
import  Menu  from './Menu';
import Body from './Body';
import { Link } from 'react-router-dom';
const Nabar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
<div className="container-fluid">
<img src={logo} className='h-28 w-21  '/>
 <a className="navbar-brand " href="#">Fresh Fusion Catering</a> 
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon  " ></span>
</button>
<div className="collapse navbar-collapse justify-center underline " id="navbarNavAltMarkup">
  <div className="navbar-nav font-bold gap-4  ">
    <Link to="/home">
      <h1 className="nav-link active" aria-current="page">
        Home
      </h1>
    </Link>
    <Link to="/menu">
      <h1 className="nav-link active" aria-current="page">
        Menu
      </h1>
    </Link>
    <Link to="/boxed-meals">
      <h1 className="nav-link active" aria-current="page">
        Boxed Meals
      </h1>
    </Link>
    <Link to="/wedding">
      <h1 className="nav-link active" aria-current="page">
        Wedding
      </h1>
    </Link>
    <Link to="/gallery">
      <h1 className="nav-link active" aria-current="page">
        Gallery
      </h1>
    </Link>
    <Link to="/contact">
      <h1 className="nav-link active" aria-current="page">
        Contact
      </h1>
    </Link>
    <button type="button" className="  btn btn-warning rounded-full ">+1 (650) 305-3943</button>
    <a href="#"><img src="https://static.vecteezy.com/system/resources/thumbnails/000/532/212/small/usa-01.jpg" height="24" width="24" alt="en"/> English</a>
  </div>
</div>
</div>
</nav>
 
</>
  )
}

export default Nabar