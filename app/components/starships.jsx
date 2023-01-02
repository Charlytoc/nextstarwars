
import People from "./peoplecard"
const fetching = () => {
  return fetch('https://www.swapi.tech/api/starships/')
  .then((response) => 
      response.json()
  )
  .then((res) => res.results)
    }

export default async function Starships () {
  const people = await fetching()
   
    return <>
    <div className="carda-container">
        {people.map((item, index) => <div key={index}><People type={"starships"} uid={item.uid} name={item.name} /></div>)}
        </div>
    </>
}