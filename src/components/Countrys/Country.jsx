
const Country = ({ countries }) => {
   return (
      <>
         <ul>
            <li>All countries</li>
            {countries.map(item => <li key={item.id}>{item}</li>)}
         </ul>

      </>
   )
}

export default Country