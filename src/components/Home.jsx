import React from 'react'
import pic1 from '../images/pic1.png'
import pic2 from '../images/pic2.png'
import pic3 from '../images/pic3.png'
import pic10 from '../images/pic10.jpg'
import chef from '../images/chef.jpg'
import '../App.css'
import Contact from './Contact'
 const Home = () => {
  return (
    <>
    {/* <div >
      <img className=' relative mx-auto flex justify-center items-center w-100 h-50 ' alt='foodpic' src={pic10} 
      
      />
    </div>
    */}
      
      <div className='main_body'>
        <div className=' h-80 text-6xl  text-center flex justify-center items-center  ' >
          <h1>Welcome To <br/> <h2 className='text-white' >Fresh Fusion Catering </h2> <h4 className='text-xl text-white py-5'>Bringing Flavorful Surprises to Every Occasion.</h4></h1> 
        </div>
        <div>
        </div>
      </div>
        <div className='ab' >
          <h1 className='text-black text-5xl flex justify-center py-3 text-white' >About us </h1>
          <h2 className='flex justify-center text-center ' >Catering is not just about food. it's about creating memorable experiences.Good catering is the secret<br/>
           ingredient thta makes an event truly unforgettable.We provide delicious food on time.
           Good eating makes you think positively. </h2>
          <div className='chef' >
            <img src={chef} />
          </div>
        </div>
        <Contact />
        
  </>
  )

}
export default Home
