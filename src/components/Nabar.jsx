import React from 'react'
import logo from '../images/logo.png'
const Nabar = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
<div class="container-fluid">
<img src={logo} className='h-28 w-21  '/>
 <a class="navbar-brand " href="#">Fresh Fusion Catering</a> 
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon  " ></span>
</button>
<div class="collapse navbar-collapse justify-center underline " id="navbarNavAltMarkup">
  <div class="navbar-nav font-bold gap-4  ">
    <a class="nav-link active" aria-current="page" href="#">Menu</a>
    <a class="nav-link active" aria-current="page" href="#">Boxed Meals</a>
    <a class="nav-link active" aria-current="page" href="#">Wedding</a>
    <a class="nav-link active" aria-current="page" href="#">Gallery</a>
    <a class="nav-link active" aria-current="page" href="#">Contact</a>
    <button type="button" class="btn btn-warning rounded-full ">+1 (650) 305-3943</button>
    <a href="#"><img src="https://static.vecteezy.com/system/resources/thumbnails/000/532/212/small/usa-01.jpg" height="24" width="24" alt="en"/> English</a>
  </div>
</div>
</div>
</nav>
 
</>
  )
}

export default Nabar