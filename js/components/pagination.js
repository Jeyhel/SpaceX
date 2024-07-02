
import { getAllRocketsId, getOneNameRock, getRocketInfo, getRocketInfoCountry, getRocketInfoimages, getRocketInfocircle1, getRocketInfoDownIzq, getRocketInfoDownDer,getRocketInfocircle3, getRocketInfoLines } from "../module/rockets.js"
import { nameRocket, plusInfoRocket, plusInfoRocket2C, plusInfoRocket3I, plusInfoRocketcircle1, plusInfoRocketcircle3, plusInfoRocketInfodown1, plusInfoRocketInfodown2, plusInfoRocketLines } from "./plantiRocket.js";
import {getCapsulasAllId, getInfoCapsulas} from "../module/capsulas.js"; 
import {InfoCapsulas } from "./plantiCapsulas.js"

import {getInfoCrew, getCrewAllId} from "../module/crew.js"
import {InfoCrew} from "./plantiCrew.js"

import {getInfoLaunches, getLaunchesAllId} from "../module/launches.js"
import {InfoLaunches} from "./plantiLaunches.js"

import {getInfoCores, getCoresAllId} from "../module/cores.js"
import {InfoCores} from "./plantiCores.js"

import {getInfoLandpads, getLandpadsAllId} from "../module/landpads.js"
import {InfoLandpads} from "./plantiLandpads.js"

import {getInfoShips, getShipsAllId} from "../module/ships.js"
import {InfoShips} from "./plantiShips.js"

import {getInfoCompany} from "../module/company.js"
import {InfoCompany} from "./plantiCompany.js"

import {getInfoDragons, getDragonsAllId} from "../module/dragons.js"
import {InfoDragons} from "./plantiDragons.js"

import {getInfoHistory, getHistoryAllId } from "../module/history.js"
import {InfoHistory} from "./plantiHistory.js"

import {getInfoLaunchpads, getLaunchpadsAllId } from "../module/launchpads.js"
import {InfoLaunchpads} from "./plantiLaunchpads.js"

import {getInfoPayloads, getPayloadsAllId } from "../module/payloads.js"
import {InfoPayloads} from "./plantiPayloads.js"


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
                pageCrew();
            }
            else if ( type === 'launches') {
                pageLaunches();
            }
            else if ( type === 'cores') {
                pageCores();
            }
            else if ( type === 'landpads') {
                pageLandpads();
            }
            else if ( type === 'ships') {
                pageShips();
            }
            else if ( type === 'dragons') {
                pageDragons();
            }
            else if ( type === 'history') {
                pageHistory();
            }
            else if ( type === 'launchpads') {
                pageLaunchpads();
            }
            else if ( type === 'payloads') {
                pagePayloads();
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
                pageCrew();
            }
            else if ( type === 'launches') {
                pageLaunches();
            }
            else if ( type === 'cores') {
                pageCores();
            }
            else if ( type === 'landpads') {
                pageLandpads();
            }
            else if ( type === 'ships') {
                pageShips();
            }
            else if ( type === 'dragons') {
                pageDragons();
            }
            else if ( type === 'history') {
                pageHistory();
            }
            else if ( type === 'launchpads') {
                pageLaunchpads();
            }
            else if ( type === 'payloads') {
                pagePayloads();
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



//pagination launches
export const pageLaunches = async () => {
    const launches = await getLaunchesAllId();
    renderPagination(launches.length, 'launches');

    const paginationElement = document.querySelector("#pagination");

    paginationElement.addEventListener("click", async (e) => {
        e.preventDefault();
        if (e.target.tagName === 'A') {
            const id = e.target.dataset.id;
            const type = e.target.dataset.type; 
            if (id && type === 'launches') {
                await loadLaunches(launches[id].id);
            }
        }
    });

    if (launches.length > 0) {
        await loadLaunches(launches[0].id); 
    }
}

const loadLaunches = async (id) => {
    document.querySelector("#header__title");
    document.querySelector(".section__information__1");
    document.querySelector(".section__information__2");
    document.querySelector(".country_rocket");
    document.querySelector(".section__image");

    let launchesInfo = await getInfoLaunches(id);

    await InfoLaunches (launchesInfo);
}


//pagination cores

export const pageCores = async () => {
    const cores = await getCoresAllId();
    renderPagination(cores.length, 'cores');

    const paginationElement = document.querySelector("#pagination");

    paginationElement.addEventListener("click", async (e) => {
        e.preventDefault();
        if (e.target.tagName === 'A') {
            const id = e.target.dataset.id;
            const type = e.target.dataset.type; 
            if (id && type === 'cores') {
                await loadCores(cores[id].id);
            }
        }
    });

    if (cores.length > 0) {
        await loadCores(cores[0].id); 
    }
}

const loadCores = async (id) => {
    document.querySelector("#header__title");
    document.querySelector(".section__information__1");
    document.querySelector(".section__information__2");
    document.querySelector(".country_rocket");
    document.querySelector(".section__image");

    let coresInfo = await getInfoCores(id);

    await InfoCores (coresInfo);
}


//pagination landpads 
export const pageLandpads = async () => {
    const landpads = await getLandpadsAllId();
    renderPagination(landpads.length, 'landpads');

    const paginationElement = document.querySelector("#pagination");

    paginationElement.addEventListener("click", async (e) => {
        e.preventDefault();
        if (e.target.tagName === 'A') {
            const id = e.target.dataset.id;
            const type = e.target.dataset.type; 
            if (id && type === 'landpads') {
                await loadLandpads(landpads[id].id);
            }
        }
    });

    if (landpads.length > 0) {
        await loadLandpads(landpads[0].id); 
    }
}

const loadLandpads = async (id) => {
    document.querySelector("#header__title");
    document.querySelector(".section__information__1");
    document.querySelector(".section__information__2");
    document.querySelector(".country_rocket");
    document.querySelector(".section__image");

    let landpadsInfo = await getInfoLandpads(id);

    await InfoLandpads (landpadsInfo);
}

//pagination ships 

export const pageShips = async () => {
    const ships = await getShipsAllId();
    renderPagination(ships.length, 'ships');

    const paginationElement = document.querySelector("#pagination");

    paginationElement.addEventListener("click", async (e) => {
        e.preventDefault();
        if (e.target.tagName === 'A') {
            const id = e.target.dataset.id;
            const type = e.target.dataset.type; 
            if (id && type === 'ships') {
                await loadShips(ships[id].id);
            }
        }
    });

    if (ships.length > 0) {
        await loadShips(ships[0].id); 
    }
}

const loadShips = async (id) => {
    document.querySelector("#header__title");
    document.querySelector(".section__information__1");
    document.querySelector(".section__information__2");
    document.querySelector(".country_rocket");
    document.querySelector(".section__image");

    let shipsInfo = await getInfoShips(id);

    await InfoShips (shipsInfo);
}

//pagination company

export const pageCompany = async () => {

    const company = await getInfoCompany();
    await loadCompany(company); 
}

const loadCompany = async (company) => {
    document.querySelector("#header__title");
    document.querySelector(".section__information__1");
    document.querySelector(".section__information__2");
    document.querySelector(".section__information__3");
    document.querySelector(".section__image");

    await InfoCompany(company);
}

//pagination dragons 


export const pageDragons = async () => {
    const dragons = await getDragonsAllId();
    renderPagination(dragons.length, 'dragons');

    const paginationElement = document.querySelector("#pagination");

    paginationElement.addEventListener("click", async (e) => {
        e.preventDefault();
        if (e.target.tagName === 'A') {
            const id = e.target.dataset.id;
            const type = e.target.dataset.type; 
            if (id && type === 'dragons') {
                await loadDragons(dragons[id].id);
            }
        }
    });

    if (dragons.length > 0) {
        await loadDragons(dragons[0].id); 
    }
}

const loadDragons = async (id) => {
    document.querySelector("#header__title");
    document.querySelector(".section__information__1");
    document.querySelector(".section__information__2");
    document.querySelector(".country_rocket");
    document.querySelector(".section__image");

    let dragonsInfo = await getInfoDragons(id);

    await InfoDragons (dragonsInfo);
}


//pagination history

export const pageHistory = async () => {
    const history = await getHistoryAllId();
    renderPagination(history.length, 'history');

    const paginationElement = document.querySelector("#pagination");

    paginationElement.addEventListener("click", async (e) => {
        e.preventDefault();
        if (e.target.tagName === 'A') {
            const id = e.target.dataset.id;
            const type = e.target.dataset.type; 
            if (id && type === 'history') {
                await loadHistory(history[id].id);
            }
        }
    });

    if (history.length > 0) {
        await loadHistory(history[0].id); 
    }
}

const loadHistory = async (id) => {
    document.querySelector("#header__title");
    document.querySelector(".section__information__1");
    document.querySelector(".section__information__2");
    document.querySelector(".country_rocket");
    document.querySelector(".section__image");

    let historyInfo = await getInfoHistory(id);

    await InfoHistory (historyInfo);
}


//pagination launchpads

export const pageLaunchpads = async () => {
    const launchpads = await getLaunchpadsAllId();
    renderPagination(launchpads.length, 'launchpads');

    const paginationElement = document.querySelector("#pagination");

    paginationElement.addEventListener("click", async (e) => {
        e.preventDefault();
        if (e.target.tagName === 'A') {
            const id = e.target.dataset.id;
            const type = e.target.dataset.type; 
            if (id && type === 'launchpads') {
                await loadLaunchpads(launchpads[id].id);
            }
        }
    });

    if (launchpads.length > 0) {
        await loadLaunchpads(launchpads[0].id); 
    }
}

const loadLaunchpads = async (id) => {
    document.querySelector("#header__title");
    document.querySelector(".section__information__1");
    document.querySelector(".section__information__2");
    document.querySelector(".country_rocket");
    document.querySelector(".section__image");

    let launchpadsInfo = await getInfoLaunchpads(id);

    await InfoLaunchpads (launchpadsInfo);
}


//pagination payloads

export const pagePayloads = async () => {
    const payloads = await getPayloadsAllId();
    renderPagination(payloads.length, 'payloads');

    const paginationElement = document.querySelector("#pagination");

    paginationElement.addEventListener("click", async (e) => {
        e.preventDefault();
        if (e.target.tagName === 'A') {
            const id = e.target.dataset.id;
            const type = e.target.dataset.type; 
            if (id && type === 'payloads') {
                await loadPayloads(payloads[id].id);
            }
        }
    });

    if (payloads.length > 0) {
        await loadPayloads(payloads[0].id); 
    }
}

const loadPayloads = async (id) => {
    document.querySelector("#header__title");
    document.querySelector(".section__information__1");
    document.querySelector(".section__information__2");
    document.querySelector(".country_rocket");
    document.querySelector(".section__image");

    let payloadsInfo = await getInfoPayloads(id);

    await InfoPayloads (payloadsInfo);
}