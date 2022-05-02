import React from 'react'
import './products.css'
import pizza from '../images/Pizza.jpg'
import jollof from '../images/jollof.jpg'
import pasta from '../images/pasta.jpg'
import friedrice from '../images/friedrice.jpg'
import rice from '../images/rice.png'
import kenkey from '../images/kenkey.jpg'



function Products() {

  const foods =[
    {id:1, foodname:'Pizza', image: pizza, price: 'N120'},
    {id:2, foodname:'Jollof', image: jollof, price: 'N120'},
    {id:3, foodname:'Pasta', image: pasta, price: 'N120'},
    {id:4, foodname:'Fried Rice', image: friedrice, price: 'N120'},
    {id:5, foodname:'Rice', image: rice, price: 'N120'},
    {id:6, foodname:'Kenkey', image: kenkey, price: 'N120'}
  ]


  return (
    <div>
      {/* product page header */}
      <h1>Products</h1>
      <div className='cards'>
        {
          foods && foods.map((food) => (
            <div className='card-box'>
              <img src={food.image} alt=''/>
              <p>{food.foodname}</p>
              <p>{food.price}</p>
            </div>
          ))
          
        }
      </div>
    </div> 
  )
}

export default Products