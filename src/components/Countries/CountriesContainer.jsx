import React, { useState } from "react"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addCountrys } from "../../redux/reducers/CountrysReducer"
import { getAllCountry } from "../../api/api"
import { useSelector } from "react-redux"
import Countries from "./Countries"


const CountriesContainer = () => {
    let dispatch = useDispatch()
    let countries = useSelector(state => state.ContryPage.countries.map(item => item.country))
    let set = new Set(countries)

    useEffect(() => {
        getAllCountry()
            .then(res => {
                dispatch(addCountrys(res))
            })
    }, [dispatch])


    return (
        <>
            {countries.length !== 0 ?
                <Countries countries={Array.from(set)} />
                : null}
        </>
    )

}

export default CountriesContainer