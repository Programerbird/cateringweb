import React from 'react'
import '../App.css'
 const Menu = () => {
  return (
    <>
        <div className='menu' >
            <h1 className='flex justify-center py-3  text-7xl underline ' >Menu</h1>
            <h2 className='flex justify-center text-white text-lg ' >The people who give you their food give you their heart. Life is too short to eat boring food.<br/>
            Food is art and science. So, learn, experiment, and don’t be afraid to make mistakes.<br/>
            Catering is not just about feeding people; it's about creating an experience</h2>
        </div>
          <div className='breakfast' >
            <h1 className='flex justify-center text-6xl underline' >Breakfast</h1>
            <h2 className='text-white py-9 text-2xl' >Continental Breakfast</h2>
            <p>Bagels, yogurt, bananas, danish, fresh brewed coffee, <br/>
            orange or apple juice, fresh fruit platter, free setup <br/>
            $15 per person <spa className="text-white text-xs " >50 person minimum.</spa></p>
            <h2 className='flex justify-center text-2xl py-5 text-white ' >Hot Breakfast</h2>
            <p className=' ' >Scrambled eggs, western eggs, breakfast sausage, bacon, <br/>
            french toast, roasted potatoes, freshbagels<br/>
            orange or apple juice, all condiments free setup<br/>
            $20 per person <span className='text-white text-xs' >50 person minimum</span></p>
          </div>

            <div className='lunch' >
              <h1 className='flex justify-center text-6xl underline' >Lunch</h1>
                <h2 className='py-5 text-2xl text-white' >Cold Lunch</h2>
                  <p>Grill Chicken Sandwich, Bacon Turkey Sandwhich, BLT Sandwhich<br/>
              Veggie Sandwich, Tuna Melt Sandwhich Steak Wrap, Fish Wrap,<br/>
              Veggie Wrap, Shrimp Wrap, Pork wrap, Caesar Salad <br/>
              $25 per person <span className='text-white text-xs' >50 person minimum</span></p>
              <h2 className='flex justify-center py-9 text-2xl text-white' >Hot Lunch</h2>
                <p>Wine Pasta with Mushrooms,Spinach Lasagna, Creamy Tomato Rigatoni<br/>
                Fettuccine Alfredo,Buttermilk Macaroni and Cheese with Baby Kale<br/>
                Spaghetti and Meatballs, Mac and Cheese, Creamy Tomato Pasta, Shrimp Alfredo, Meat Lasagna<br/>
                $30 per person <span className='text-white text-xs' >50 person minimum</span> </p>
            </div>
              <div className='dinner' >
                <h1 className='flex justify-center text-6xl underline' >Dinner</h1>
                  <h2 className='py-5 text-2xl text-white' >Main Dinner</h2>
                    <p>Spagetti, Fettucini Alfredo, Vegan Pesto Pasta, Traditional<br/>
                    Roasted Vegetable Lasagna, Lemon-Herb Chicken, BBQ-Chicken, <br/>
                    Grilled Hamburgers, Grilled Hot Dog, Roasted Vegetable Slider<br/>
                    $40 per person <span className='text-white text-xs' >100 person minimum</span></p>
                      <h3 className='py-5 text-2xl text-white' >Chef's Choice Dinner</h3>
                        <p>Pulled Pork Sliders, tri-tip Slider, BBQ Ribs, Boursin Stuffed Chicken,<br/>
                        Stuffed Pork Loin, Meat Balls, Roasted Turkey, Roasted Vegetable Skewers,<br/>
                        Pork Tenderloin, New York Strip, Seared Salmon<br/>
                        $50 per person <span className='text-white text-xs ' >100 person minimum</span></p>

              </div>
         
       
    </>
  )
}
export default Menu