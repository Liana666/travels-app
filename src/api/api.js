import axios from "axios"

export const getAllCountry = () => {
    return axios.get('http://myjson.dit.upm.es/api/bins/bn0h')
        .then(res => {
            return res.data
        })
}