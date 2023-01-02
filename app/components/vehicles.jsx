import People from "./peoplecard"
const fetching = () => {
  return fetch('https://www.swapi.tech/api/vehicles/')
  .then((response) => 
      response.json()
  )
  .then((res) => res.results)
    }

export default async function Vehicles () {
  const people = await fetching()

    return <>
    <div className="carda-container">
        {people.map((item, index) => <div key={index}><People type={"vehicles"} uid={item.uid} name={item.name} /></div>)}
        </div>
    </>
}