
import { getAllRocketsId, getOneNameRock, getRocketInfo, getRocketInfoCountry, getRocketInfoimages, getRocketInfocircle1, getRocketInfoDownIzq, getRocketInfoDownDer,getRocketInfocircle3, getRocketInfoLines } from "../module/rockets.js"
import { nameRocket, plusInfoRocket, plusInfoRocket2C, plusInfoRocket3I, plusInfoRocketcircle1, plusInfoRocketcircle3, plusInfoRocketInfodown1, plusInfoRocketInfodown2, plusInfoRocketLines } from "./plantiRocket.js";
import {getCapsulasAllId, getInfoCapsulas} from "../module/capsulas.js"; 
import {InfoCapsulas } from "./plantiCapsulas.js"

import {getInfoCrew, getCrewAllId} from "../module/crew.js"
import {InfoCrew} from "./plantiCrew.js"


let currentPage = 0;
const itemsPerPage = 5;

const renderPagination = (totalItems, type) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const paginationElement = document.querySelector("#pagination");
    paginationElement.innerHTML = '';

    const start = currentPage * itemsPerPage;
    const end = start + itemsPerPage;
    for (let i = start; i < end && i < totalItems; i++) {
        const page = document.createElement('a');
        page.href = "#";
        page.textContent = i + 1;
        page.dataset.id = i;
        page.dataset.type = type; 
        paginationElement.appendChild(page);
    }

    const prevButton = document.createElement('button');
    const img1 = document.createElement('img');
    img1.setAttribute('class', 'izquierda');
    img1.setAttribute('src', './storage/img/flechaI.png');
    prevButton.appendChild(img1);
    prevButton.disabled = currentPage === 0;
    prevButton.onclick = () => {
        if (currentPage > 0) {
            currentPage--;
            if (type === 'rockets') {
                pageRocket();
            } else if (type === 'capsules') {
                pageCapsulas();
            }
            else if ( type === 'crew') {
                paginationCrew();
            }
        }
    };

    const nextButton = document.createElement('button');
    const img2 = document.createElement('img');
    img2.setAttribute('class', 'derecha');
    img2.setAttribute('src', './storage/img/flechaD.png');
    nextButton.appendChild(img2);
    nextButton.disabled = currentPage >= totalPages - 1;
    nextButton.onclick = () => {
        if (currentPage < totalPages - 1) {
            currentPage++;
            if (type === 'rockets') {
                pageRocket();
            } else if (type === 'capsules') {
                pageCapsulas();
            }
            else if ( type === 'crew') {
                paginationCrew();
            }
        }
    };

    paginationElement.insertBefore(prevButton, paginationElement.firstChild);
    paginationElement.appendChild(nextButton);
};

// pagination Rockets
export const pageRocket = async () => {
    currentPage = 0;
    const plantiRocket = await getAllRocketsId();
    renderPagination(plantiRocket.length, 'rockets'); 

    const paginationElement = document.querySelector("#pagination");
    paginationElement.addEventListener("click", async (e) => {
        e.preventDefault();
        if (e.target.tagName === 'A') {
            const id = e.target.dataset.id;
            const type = e.target.dataset.type; 
            if (id && type === 'rockets') {
                await loadRocket(plantiRocket[id].id);
            }
        }
    });

    if (plantiRocket.length > 0) {
        await loadRocket(plantiRocket[0].id);
    }
}

const loadRocket = async (id) => {

    document.querySelector(".section__information__1");
    document.querySelector(".information__table__1");
    document.querySelector(".information__table__2");
    document.querySelector(".section__image");

   
    const rocketName  = await getOneNameRock(id);
    await nameRocket(rocketName);
    
    
    const rocketPlusInfo = await getRocketInfo(id);
    await plusInfoRocket(rocketPlusInfo);
    //console.log(rocketPlusInfo);
    
    const rocketCountry = await getRocketInfoCountry(id);
    await plusInfoRocket2C (rocketCountry)
    //console.log(rocketCountry)
    
    const rocketImg = await getRocketInfoimages(id);
    await plusInfoRocket3I (rocketImg)
    //console.log(rocketImg);
    
    const rocketCircle1 = await getRocketInfocircle1(id);
    await plusInfoRocketcircle1 (rocketCircle1)
    //console.log(rocketCircle1);
    
    const rocketCircle3 = await getRocketInfocircle3(id); /*----*/
    await plusInfoRocketcircle3 (rocketCircle3)
    //console.log(rocketCircle3);
    
    const rocketDown1 = await getRocketInfoDownIzq(id);
    await plusInfoRocketInfodown1 (rocketDown1)
    //console.log(rocketDown1);
    
    const rocketDown2 = await getRocketInfoDownDer(id);
    await plusInfoRocketInfodown2 (rocketDown2)
    //console.log(rocketDown2);
    
    const rocketLines = await getRocketInfoLines(id);
    await plusInfoRocketLines (rocketLines)
    //console.log(rocketLines);
}

//CARGA AUTOMATICAAAAA
export const XDXDLOLOL = async(id) => {

    
     
    const rocketName  = await getOneNameRock(id);
    await nameRocket(rocketName);
    
    
    const rocketPlusInfo = await getRocketInfo(id);
    await plusInfoRocket(rocketPlusInfo);
    //console.log(rocketPlusInfo);
    
    const rocketCountry = await getRocketInfoCountry(id);
    await plusInfoRocket2C (rocketCountry)
    //console.log(rocketCountry)
    
    const rocketImg = await getRocketInfoimages(id);
    await plusInfoRocket3I (rocketImg)
    //console.log(rocketImg);
    
    const rocketCircle1 = await getRocketInfocircle1(id);
    await plusInfoRocketcircle1 (rocketCircle1)
    //console.log(rocketCircle1);
    
    const rocketCircle3 = await getRocketInfocircle3(id); /*----*/
    await plusInfoRocketcircle3 (rocketCircle3)
    //console.log(rocketCircle3);
    
    const rocketDown1 = await getRocketInfoDownIzq(id);
    await plusInfoRocketInfodown1 (rocketDown1)
    //console.log(rocketDown1);
    
    const rocketDown2 = await getRocketInfoDownDer(id);
    await plusInfoRocketInfodown2 (rocketDown2)
    //console.log(rocketDown2);
    
    const rocketLines = await getRocketInfoLines(id);
    await plusInfoRocketLines (rocketLines)
    //console.log(rocketLines);
    
}





// pagination Capsulas
export const pageCapsulas = async () => {
    try {
        const capsules = await getCapsulasAllId();
        renderPagination(capsules.length);

        const paginationElement = document.querySelector("#pagination");
        paginationElement.addEventListener("click", async (e) => {
            e.preventDefault();
            if (e.target.tagName === 'A') {
                const id = e.target.dataset.id;
                if (id) {
                    await loadCapsule(capsules[id].id);
                }
            }
        });

        if (capsules.length > 0) {
            await loadCapsule(capsules[0].id);
        }
    } catch (error) {
        console.error("Error fetching capsules:", error);
        return "<p>Error loading capsules</p>";
    }
}

const loadCapsule = async (id) => {
    try {
        const capsuleInfo = await getInfoCapsulas(id);
        document.querySelector(".section__information__1");  
        await InfoCapsulas(capsuleInfo);
    } catch (error) {
        console.error("Error loading capsule data:", error);
    }
}


// pagination Crew
export const pageCrew = async () => {
    const crew = await getCrewAllId();
    renderPagination(crew.length, 'crew');

    const paginationElement = document.querySelector("#pagination");

    paginationElement.addEventListener("click", async (e) => {
        e.preventDefault();
        if (e.target.tagName === 'A') {
            const id = e.target.dataset.id;
            const type = e.target.dataset.type; 
            if (id && type === 'crew') {
                await loadCrew(crew[id].id);
            }
        }
    });

    if (crew.length > 0) {
        await loadCrew(crew[0].id); 
    }
}

const loadCrew = async (id) => {
    document.querySelector("#header__title");
    document.querySelector(".section__information__1");
    document.querySelector(".section__information__2");
    document.querySelector(".country_rocket");
    document.querySelector(".section__image");

    let crewInfo = await getInfoCrew(id);

    await InfoCrew(crewInfo);
}





