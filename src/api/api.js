import axios from "axios"

export const getAllCountry = () => {
    return axios.get('http://myjson.dit.upm.es/api/bins/3d37')
        .then(res => {
            return res.data
        })
}