'use client'
import axios from "axios"
import { use, useEffect } from "react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function AboutVehicles ({params}) {
    const [vehicles, setvehicles] = useState([])

    const fetching = async () => {


        // climate /
        // diameter
        // gravity
        // name
        // orbital_period
        // population
        // rotation_period
        // surface_water
        // terrain

    return await axios.get(`https://www.swapi.tech/api/vehicles/${params.id}`)
    .then((response) => {
        setvehicles(response.data.result.properties)
    })
    .catch((error) => {
      console.log(error);
    })
      }
    useEffect(()=>{fetching()}, [])
   

    /* 
    cargo_capacity
cost_in_credits

crew
films
length
manufacturer

 */
    return <>
    {/* <button onClick={()=>console.log(vehicles)}>VER QUE GUARDO</button> */}
    <div className="info-container">
        <div><h1>{vehicles.name}</h1></div>
        <Image src={`https://starwars-visualguide.com/assets/img/vehicles/${params.id}.jpg`} width={200} height={200} alt=".." />
        <h2>Cargo capacity: {vehicles.cargo_capacity}</h2>
        <h2>Passengers: {vehicles.passengers}</h2>
        <h2>Max atmosphering speed: {vehicles.max_atmosphering_speed}</h2>
        <h2>Would you by one? Cost: {vehicles.cost_in_credits}</h2>
        <h2>Length of this vehicle {vehicles.length}</h2>
        <h2>Manufacturer: {vehicles.manufacturer}</h2>
        
    </div>
    <div className="next-item">
      <div><Link href={`/vehicles/${parseInt(params.id) + 1}`}>Continue reading the next vehicle</Link></div>
      {parseInt(params.id) > 1 ? <div><Link href={'/characters/1'}>Return to the beginning</Link></div> : null}
    </div>
    </>
}