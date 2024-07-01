
// import {getAllRockets,OneNameRock, RocketDescription, getAllRocketsId, } from "./module/rockets.js"



import { pageRocket, pageCapsulas, pageCrew } from "./components/pagination.js";
import { clearInformation } from "./components/inner.js";

document.addEventListener("DOMContentLoaded", async () => {
    const rocketElement = document.querySelector("#rocket");
    const capsulesElement = document.querySelector("#capsules");
    const crewElement = document.querySelector("#crew");
  

    rocketElement.addEventListener("click", handleRocketClick);
    capsulesElement.addEventListener("click", handleCapsulesClick);
    crewElement.addEventListener("click", handleCrewClick);

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
