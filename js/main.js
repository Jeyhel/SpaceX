
// import {getAllRockets,OneNameRock, RocketDescription, getAllRocketsId, } from "./module/rockets.js"



import { pageRocket, pageCapsulas, pageCrew, pageLaunches, pageCores, pageLandpads, pageShips, pageCompany} from "./components/pagination.js";
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

   const shipsElement = document.querySelector("#ships");
   shipsElement.addEventListener("click", handleShipsClick);

   const companyElement = document.querySelector("#company");
   companyElement.addEventListener("click", handleCompanyClick);

   

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

const handleShipsClick = async () => {
    clearInformation();
    await pageShips();
}
const handleCompanyClick = async () => {
    clearInformation();
    await pageCompany();
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
