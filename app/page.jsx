import Link from "next/link"
import Peoples from "./components/peoples"
import Planets from "./components/planets"

// import Prueba from "./components/prueba"
import Starships from "./components/starships"
import Vehicles from "./components/vehicles"

   
export  default function HomePage () {

    return <>
        
        <div className="d-flex text-center justify-content-center">
        <div className="title" >
            <h1 >Welcome to the Star Wars Blog by: <span><Link href={"https://www.linkedin.com/in/charlytoc/"} >Charlytoc</Link></span></h1>
        </div>
        </div>
        <h1>
            Characters
        </h1>
        <Peoples />
        <h1>
            Planets
        </h1>
        <Planets />
        <h1>
            Starships
        </h1>
        <Starships />
        <h1>
            Vehicles
        </h1>
        <Vehicles />

    </>
}