import './Countries.sass'
import { useDispatch } from 'react-redux'
import { addCurrentCountry } from '../../redux/reducers/CartsReducer'
import { useSelector } from 'react-redux'

const Countries = ({ countries }) => {
   let dispatch = useDispatch()
   let currentCountry = useSelector(state => state.CartPage.currentCountry)

   let filterCountry = (e) => {
      dispatch(addCurrentCountry(e.target.textContent))
   }

   let defaultCountry = () => {
      dispatch(addCurrentCountry(''))
   }


   return (
      <>
         <ul className="countries-list">
            <li
               onClick={defaultCountry}
               className={currentCountry === '' ? "countries-list__li active" : "countries-list__li"}>
               All countries
            </li>

            {countries.map(item => <li
               onClick={filterCountry}
               className={currentCountry === item ? "countries-list__li active" : "countries-list__li"}
               key={item.toString()}>
               {item}
            </li>)}
         </ul>

      </>
   )
}

export default Countries