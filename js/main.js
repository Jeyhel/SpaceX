
// import {getAllRockets,OneNameRock, RocketDescription, getAllRocketsId, } from "./module/rockets.js"



import { pageRocket, pageCapsulas, pageCrew, pageLaunches, pageCores, pageLandpads } from "./components/pagination.js";
import { clearInformation } from "./components/inner.js";

document.addEventListener("DOMContentLoaded", async () => {
    const rocketElement = document.querySelector("#rocket");
    rocketElement.addEventListener("click", handleRocketClick);

    const capsulesElement = document.querySelector("#capsules");
    capsulesElement.addEventListener("click", handleCapsulesClick);

    const crewElement = document.querySelector("#crew");
    crewElement.addEventListener("click", handleCrewClick);

    const launchesElement = document.querySelector("#launches");
   launchesElement.addEventListener("click", handleLaunchesClick);

   const coresElement = document.querySelector("#cores");
   coresElement.addEventListener("click", handleCoresClick);

   const landpadsElement = document.querySelector("#landpads");
   landpadsElement.addEventListener("click", handleLandpadsClick);

    await handleRocketClick();
});

const handleRocketClick = async () => {
    clearInformation();
    await pageRocket();
}

const handleCapsulesClick = async () => {
    clearInformation();
    await pageCapsulas();
}

const handleCrewClick = async () => {
    clearInformation();
    await pageCrew();
}
const handleLaunchesClick = async () => {
    clearInformation();
    await pageLaunches();
}
const handleCoresClick = async () => {
    clearInformation();
    await pageCores();
}
const handleLandpadsClick = async () => {
    clearInformation();
    await pageLandpads();
}




//LAMA TODA LA DATA
// let header__title = document.querySelector("header__title")
// header__title.innerHTML = await title();


// addEventListener("DOMContentLoaded", async()=>{
//     let info = await getAllRockets()
//     console.log(info);
    
// }); 



//LLAMA LOS 4 IDS// addEventListener("DOMContentLoaded", async()=>{
//     let docs = await getAllRocketsId()
  
//     console.log (docs); 
    
//     document.addEventListener("DOMContentLoaded", async () => {
//         document.querySelector("#pagination").innerHTML = await pageRockets();    
        
       
// }); 
// });
