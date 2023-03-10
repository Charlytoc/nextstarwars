import "../styles/globals.css"
import Link from "next/link"
import Navbar from "./components/navbar"
import Placeholder from "./components/placeholder"
import Footer from "./components/footer"
// import {  createContext } from "react"
// import AppContext from "./components/AppContext"
import "../styles/game.css"
export default function RootLayout({ children }) {
  


  return (
    <html>
      <head />
      <body className="w-100">
      
      <div style={{display: "none"}} id="placeholder-menu">
        <Placeholder />
      </div>
      <div id="mr-all">
      <Navbar />
      {children}
      <Footer />
      </div>
      
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/ScrollTrigger.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossOrigin="anonymous"></script>
      <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
      <script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
      </body>
    </html>
  )
}
