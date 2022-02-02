import React from "react"

const Carts = ({
    country,
    city,
    imgpk,
    imgmob,
    description
}) => {

    return (
        <section className="carts-grid">
            <img src={imgpk} alt="" />
        </section>
    )
}

export default Carts