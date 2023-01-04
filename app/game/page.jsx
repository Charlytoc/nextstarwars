'use client'
import { useEffect } from "react";
export default function Game () {


    const moveStarship = (e) => {
        e.preventDefault()
        let starship = document.querySelector(".starship");
        let midStarship = starship.offsetWidth / 2;
        let scenario = document.querySelector(".scenario")
        const height = scenario.offsetHeight
        const leftScena = scenario.offsetLeft
        const midScenario = scenario.offsetWidth / 2;
        const leftStar = starship.offsetLeft;
        const scenarioWidth = midScenario *2
        const rigthStar = leftStar + midStarship*2
        if (e.code == 'Space') {
            let fire = document.createElement("span");
            fire.style.left = `${leftStar + midStarship}px`
            scenario.appendChild(fire);
            fire.classList.add("fireshoot")
            setTimeout(() => {
                fire.style.transform = `translate(-50%, -${height}px)` 
            }, 200);
            
        }
        
            if (e.key === 'ArrowLeft' && leftStar > 0) {

                const left = parseInt(starship.style.left || midScenario, 10);
                starship.style.left = `${left - 10}px`;
              } else if (e.key === 'ArrowRight' && rigthStar < scenarioWidth) {
                const left = parseInt(starship.style.left || midScenario, 10);
                starship.style.left = `${left + 10}px`;
              }
        
    }


    useEffect(()=>{
        window.addEventListener("keydown", (e)=>{moveStarship(e)})
    }, [])
    return <>
    <div className="game">
        <button onClick={()=>shoot()}>DISPARAR</button>
        <div className="scenario">
            <div className="starship"></div>
        </div>
    </div>
    </>
}