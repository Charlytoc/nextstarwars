'use client'
import { useState } from "react"
export default  function AddFavButton ({type, uid, name}) {
    const [favorites, setFavorites] = useState([])
    const addFavorite = (type, uid, name) => {
        let url = `https://www.swapi.tech/api/${type}/${uid}`
        let item = {
            url: url,
            name: name
        }
        // console.log(localStorage.getItem('favorites'))
        let favorites = JSON.parse(localStorage.getItem('favorites'))
        // console.log(1,"yo muestro un objeto dentro de un array", favorites)]
        if ( favorites == null) {
            // console.log("ENtrAMOS")
            let prevFav = [item]
            let favs = JSON.stringify(prevFav)
            localStorage.setItem('favorites', favs)
            setFavorites(prevFav)
        }
        else {
            let news = [...favorites, item]
            // console.log("acá deberían haber dos objetos dentro de un array",news)
            localStorage.removeItem('favorites')
            let newFavs = JSON.stringify(news)
            // console.log(3, 'en string los anteriores',newFavs)
            localStorage.setItem('favorites', newFavs)
            setFavorites(JSON.parse(localStorage.getItem('favorites')))
            
        }
        
    
    }
    const showFavs = () => {
        console.log(favorites)
    }
    return <>
    {/* <p onClick={()=>{addFavorite(type, uid, name)}}>Add favorite</p>
    <p onClick={()=>{showFavs()}}>see favorites</p> */}
    </>
}