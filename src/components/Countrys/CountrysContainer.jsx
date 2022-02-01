import React from "react"
import axios from "axios"


import { useEffect, useState } from "react"
import { getAllCountry } from "../../api/api"

const CountrysContainer = () => {
    const [countrys, setCountrys] = useState([])

    // useEffect(() => {
    //     getAllCountry().then(res => setCountrys(res.country))
    // }, [])


    return (
        <>
            hi
        </>
    )

}

export default CountrysContainer