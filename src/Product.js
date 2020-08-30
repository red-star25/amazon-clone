import React from 'react'
import "./Product.css"
import {useStateValue} from "./StateProvider"

function Product({id,title,price,rating,image}) {

    const [{basket},dispatch]= useStateValue();
    const addToBasket = ()=>{
        dispatch({
            type:"ADD_TO_BASKET",
            item:{
                id,
                title,
                price,
                rating,
                image
            }
        })
    }

    return (
        <div className="product">
        <div className="product__info">
            <p>{title}</p>
            <p className="product__price">
                <span>$</span>
                <span>{price}</span>
            </p>
            <div className="product__rating">
                {
                    Array(rating)
                    .fill()
                    .map((_)=>(
                        <p>⭐</p>
                    ))
                }
            </div>
        </div>
            <img src={image} alt=""/>
            <button onClick={addToBasket}>Add to Cart</button>
        </div>
    )
}

export default Product
