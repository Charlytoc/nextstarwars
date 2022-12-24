'use client'
import Link from "next/link"
export default function Placeholder () {
    const addClass = () => {
        let elem = document.getElementById("placeholder-menu")
        let all = document.getElementById("mr-all")
        if (elem.style.display == "none") {
          elem.style.display = "block"
          all.style.display = "none"
        }
        else {
          elem.style.display = "none"
          all.style.display = "block"
        }
    }
    return <>
        
        <div className="menu">
        <div onClick={()=>{addClass()}}>Close</div>
        <h2><Link href={'/'} >Github</Link></h2>
        <h2><Link href={'/'} >Instagram</Link></h2>
        <h2><Link href={'/'} >Linkedin</Link></h2>
        <h2><Link href={'/'} >Contact</Link></h2>
        </div></>
}