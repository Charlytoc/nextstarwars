"use client"
import axios from "axios"

import { use, useEffect } from "react"

import { useState } from "react"
import People from "./peoplecard"


export default function Vehicles () {
    const [people, setPeople] = useState([])

    const fetching = async () => {
    return await axios.get('https://www.swapi.tech/api/vehicles/')
    .then((response) => {
        setPeople(response.data.results)
    })
    .catch((error) => {
      console.log(error);
    })
      }
    useEffect(()=>{fetching()}, [])
   

    return <>
    <div className="carda-container">
        {people.map((item, index) => <div><People type={"vehicles"} uid={item.uid} name={item.name} /></div>)}
        </div>
    </>
}