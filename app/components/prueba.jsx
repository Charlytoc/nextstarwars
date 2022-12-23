const fetchPlanets = () => {
    return fetch("https://swapi.dev/api/planets", {cache: "no-store"})
    .then(res => res.json())
}

export default async function Prueba () {
    const planets = await fetchPlanets()
    
    return <><p></p></>
}