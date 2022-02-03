import React from "react"
import { useSelector } from "react-redux"
import Carts from "./Carts"


const CartsContainer = () => {
    let currentCountry = useSelector(state => state.CartPage.currentCountry)
    let countries = useSelector(state => {
        if (currentCountry === '') {
            return state.ContryPage.countries
        }
        else {
            return state.ContryPage.countries.filter(item => item.country === currentCountry)
        }

    })


    return (
        <>
            <section>
                {countries.length > 0 ?
                    <Carts countries={countries} />
                    : null
                }
            </section>

        </>
    )

}

export default CartsContainer