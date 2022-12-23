'use client'
import axios from "axios"
import { use, useEffect } from "react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function AboutCharacters ({params}) {
    const [people, setPeople] = useState([])

    const fetching = async () => {
    return await axios.get(`https://www.swapi.tech/api/people/${params.id}`)
    .then((response) => {
        setPeople(response.data.result.properties)
    })
    .catch((error) => {
      console.log(error);
    })
      }
    useEffect(()=>{fetching()}, [])
   

// birth_year
// eye_color
// gender
// hair_color
// height
// mass
// skin_color
// "fair"

    return <>
    {/* <p>{params.id}</p> */}
    {/* <button onClick={()=>console.log(people)}>VER QUE GUARDO</button> */}
    <div className="info-container">
        <h1>{people.name}</h1>
        <Image src={`https://starwars-visualguide.com/assets/img/characters/${params.id}.jpg`} width={200} height={200} alt=".." />
        <h2>This character was born in {people.birth_year}</h2>
        <h2>The eyes of this character are of color: <span style={{color: `${people.eye_color}`}}>{people.eye_color}</span></h2>
        <h2>The hair color of this character is: <span style={{color: `${people.hair_color}`}}>{people.hair_color}</span></h2>
        <h2>Is this character tall or not? You decide it. Height: {people.height}</h2>
        <h2>This character's gender is: {people.gender}</h2>
        <h2></h2>
    </div>
    <div className="next-item">
      <div><Link href={`/characters/${parseInt(params.id) + 1}`}>Continue reading the next character</Link></div>
      {parseInt(params.id) > 1 ? <div><Link href={'/characters/1'}>Return to the beginning</Link></div> : null}
    </div>
    </>
}