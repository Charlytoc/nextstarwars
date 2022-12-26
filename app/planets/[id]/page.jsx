'use client'
import axios from "axios"
import { use, useEffect } from "react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPlanets ({params}) {
    const [people, setPeople] = useState([])

    const fetching = async () => {


    return await axios.get(`https://www.swapi.tech/api/planets/${params.id}`)
    .then((response) => {
        setPeople(response.data.result.properties)
    })
    .catch((error) => {
      console.log(error);
    })
      }
    useEffect(()=>{fetching()}, [])
   


    return <>
    {/* <button onClick={()=>console.log(people)}>VER QUE GUARDO</button> */}
    <div className="info-container">
        <div><h1>{people.name}</h1></div>
        <Image src={`https://starwars-visualguide.com/assets/img/planets/${params.id}.jpg`} width={200} height={200} alt=".." />
        <h2>The climate of this planet is: {people.climate}</h2>
        <h2>Diameter of the planet: {people.diameter}</h2>
        <h2>Gravity of the planet: {people.gravity}</h2>
        <h2>Orbital period: {people.orbital_period}</h2>
        <h2>Population of the planet: {people.popukation}</h2>
        <h2>Terrains: {people.terrain}</h2>
    </div>
    <div className="next-item">
      <div><Link href={`/planets/${parseInt(params.id) + 1}`}>Continue reading the next planet</Link></div>
      {parseInt(params.id) > 1 ? <div><Link href={'/characters/1'}>Return to the beginning</Link></div> : null}
    </div>
    </>
}