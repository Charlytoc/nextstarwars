'use client'

export default function Game () {
    const shoot = () => {
        let starship = document.querySelector(".starship");
        // let starshipX = starship.offsetLeft;
        let midStarship = starship.offsetWidth / 2;
        let scenario = document.querySelector(".scenario")

        console.log(midStarship)
        let fire = document.createElement("span");
        
        fire.classList.add("fireshoot")
        fire.style.display = "block";
        fire.style.position = "absolute"
        fire.style.left = `${midStarship}px`
        fire.style.top = '-10px'
        fire.style.backgroundColor = "yellow"
        // let space = document.querySelector(".scenario");
        starship.appendChild(fire);
        // const shooting = setInterval(() => {
        //     const 
        // }, 10);
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