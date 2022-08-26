import React from 'react';
import './Product.css'; 
import {useStateValue} from './StateProvider';
function Product  ({id,title,rating,price,image})  {
    const [{basket},dispatch] = useStateValue();
    console.log('This is the basket ',basket);
    const addToBasket = () =>{
        //dispatch item into datalayer
         dispatch({
             type:'ADD_TO_BASKET',
             item:{
                id:id,
                title:title,
                rating:rating,
                price:price,
                image:image,
             }
         })
    }
    return (
        <div className='product'>
            <div className='product__info'>
                <p>{title}</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='product__rating'>
                        {Array(rating)
                    .fill()
                    .map((_, i) => (
                    <p>🌟</p>
                    ))}
                </div>
            </div>
            <img src={image} alt="" />
            <button className="Addbutton" onClick={addToBasket}>Add To Basket</button>
        </div>
    );
}
export default Product;
