
// import {getAllRockets,OneNameRock, RocketDescription, getAllRocketsId, } from "./module/rockets.js"


import { pageRockets, setupPaginationRockets, paginationCapsules, setUpPaginationCapsules, } from "./components/pagination.js";



export const clearInformation = () => {
    document.querySelector("#header__title").innerHTML = "";
    document.querySelector(".description__item").innerHTML = "";
    document.querySelector(".section__information__1").innerHTML = "";
    document.querySelector(".information__table__1").innerHTML = "";
    document.querySelector("#country_rocket").innerHTML = "";
    document.querySelector("#sucess_rate_rocket").innerHTML = "";
    document.querySelector(".information__table__2").innerHTML = "";
    document.querySelector(".section__image").innerHTML = "";
    document.querySelector(".information__item").innerHTML = "";
    document.querySelector(".information__buttom").innerHTML = "";
    document.querySelector("#pagination").innerHTML = "";
}

const handleRocketClick = async e => {
    clearInformation (); 
    document.querySelector("#pagination").innerHTML = await pageRockets();
    setupPaginationRockets();
}

const handleCapsulesClick = async e => {
    clearInformation(); 
    document.querySelector("#pagination").innerHTML = await paginationCapsules();
    setUpPaginationCapsules();
}

document.addEventListener("DOMContentLoaded", async () => {
    const rocketElement = document.querySelector("#rocket");
    const capsulesElement = document.querySelector("#capsules");

    rocketElement.addEventListener("click", handleRocketClick);
    capsulesElement.addEventListener("click", handleCapsulesClick);

    clearInformation(); 
    document.querySelector("#pagination").innerHTML = await pageRockets();
    setupPaginationRockets();
});


document.querySelector("#rocket").addEventListener("click", () => {
    document.querySelector("#capsules").removeEventListener("click", handleCapsulesClick);
});

document.querySelector("#capsules").addEventListener("click", () => {
    document.querySelector("#rocket").removeEventListener("click", handleRocketClick);
});
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
