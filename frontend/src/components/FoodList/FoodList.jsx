import React from 'react'
import './FoodList.css'
import { food_list } from '../../assets/assets'
import FoodItem from '../FoodItem/FoodItem'

const FoodList = ({category}) => {
  return (
    <div className='food-display' id='food-display'>
        <h2>Top dishes near you</h2>
        <div className="food-display-list">
            {food_list.map((item,index)=>{
              if(category==="All" || category===item.category){
                return <FoodItem key={index} name={item.name} description={item.description} id={item._id} image={item.image} price={item.price}  />
              }}
            )}
        </div>
    </div>
  )
}

export default FoodList