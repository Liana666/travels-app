import axios from "axios"

export const getAllCountry = () => {
    return axios.get('http://myjson.dit.upm.es/api/bins/et7l')
        .then(res => {
            return res.data
        })
}