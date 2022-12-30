'use client'

export default function Game () {
    const shoot = () => {
        
        let fire = document.createElement("span");
        
        fire.classList.add("fireshoot")
        fire.style.display = "block"
        let space = document.querySelector(".scenario");
        space.appendChild(fire);
        console.log(space)
    }
    return <>
    <div className="game">
        <button onClick={()=>shoot()}>DISPARAR</button>
        <div className="scenario">
            <div className="starship"></div>
        </div>
    </div>
    </>
}