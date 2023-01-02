
import People from "./peoplecard"
const fetching = () => {
  return fetch('https://www.swapi.tech/api/planets/')
  .then((response) => 
      response.json()
  )
  .then((res) => res.results)
    }

export default async function Planets () {
  const people = await fetching()
   

    return <>
    <div className="carda-container">
        {people.map((item, index) => <div key={index}><People uid={item.uid} type={'planets'} name={item.name} /></div>)}
        </div>
    </>
}