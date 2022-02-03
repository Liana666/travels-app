import React from "react"

const CartItem = ({
    country,
    city,
    imgpk,
    imgmob,
    description
}) => {

    return (
        <div className="cartItem">
            <img className="cartItem__img" src={imgpk} alt="" />
            <span className="cartItem__city">{city}</span>
            <span className="cartItem__country">{country}</span>

        </div>
    )
}

export default CartItem