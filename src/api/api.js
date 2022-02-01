import axios from "axios"

export const getAllCountry = () => {
    return axios.get('./../data/data.json')
        .then(res => {
            return res.data
        })
}