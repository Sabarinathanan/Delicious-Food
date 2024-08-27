import { useContext } from 'react'
import { assets } from '../../assets/assets'
import './FoodItem.css'
import { StoreContext } from '../../Context/StoreContext';

const FoodItem = ({ id, name, description, image, price }) => {
    const { addToCart, removeFromCart, cartItems } = useContext(StoreContext)
  
    return (
        <div className='food-item'>
            <div className="food-item-img-container">
                <img className='food-item-image' src={image} alt="" />
                {!cartItems[id]
                    ? <img className="add" onClick={() => addToCart(id)} src={assets.add_icon_white} alt="Add to cart"/>
                    : <div className="food-item-counter">
                        <img className="food-item-buy-button" onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="Remove from cart"/>
                        <p>{cartItems[id]}</p>
                        <img className="food-item-buy-button" onClick={() => addToCart(id)} src={assets.add_icon_green} alt="Add more"/>
                    </div>
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="Rating" />
                </div>
                <p className="food-item-description">{description}</p>
                <p className="food-item-price">${price}</p>
            </div>
        </div>
    )
}

export default FoodItem
