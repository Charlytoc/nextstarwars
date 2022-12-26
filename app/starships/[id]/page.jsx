'use client'
import axios from "axios"
import { use, useEffect } from "react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function AboutStarships ({params}) {
    const [starships, setstarships] = useState([])

    const fetching = async () => {

    return await axios.get(`https://www.swapi.tech/api/starships/${params.id}`)
    .then((response) => {
        setstarships(response.data.result.properties)
    })
    .catch((error) => {
      console.log(error);
    })
      }
    useEffect(()=>{fetching()}, [])

    return <>
    {/* <button onClick={()=>console.log(starships)}>VER QUE GUARDO</button> */}
    <div className="info-container">
        <div><h1>{starships.name}</h1></div>
        <Image src={`https://starwars-visualguide.com/assets/img/starships/${params.id}.jpg`} width={200} height={200} alt=".." />
        <h2>Cargo capacity: {starships.cargo_capacity}</h2>
        <h2>Passengers: {starships.passengers}</h2>
        <h2>Would you by one? Cost: {starships.cost_in_credits}</h2>
        <h2>Hyperdrive rating: {starships.hyperdrive_rating}</h2>
        <h2>Length of this starship {starships.length}</h2>
        <h2>Max atmosphering speed: {starships.max_atmosphering_speed}</h2>
        
    </div>
    <div className="next-item">
      <div><Link href={`/starships/${parseInt(params.id) + 1}`}>Continue reading the next starship</Link></div>
      {parseInt(params.id) > 1 ? <div><Link href={'/characters/1'}>Return to the beginning</Link></div> : null}
    </div>
    </>
}