
import { getAllRocketsId, getOneNameRock, getRocketInfo, getRocketInfoCountry } from "../module/rockets.js"
import { nameRocket, plusInfoRocket, plusInfoRocket2} from "./plantiRocket.js";


export const pageRockets = async () => {
    const rockets = await getAllRocketsId();
    const html = rockets.map((rocket, index) => {
        const pag = index + 1;
        return `<a href="#" data-id="${rocket.id}">${pag}</a>`;
    });
    return html.join("");
}

export const setupPagination = () => {
    document.querySelector("#pagination").addEventListener("click", async (e) => {
        e.preventDefault();
        const id = e.target.dataset.id;

     
        const rocketName = await getOneNameRock(id);
        await nameRocket(rocketName);
        
        const rocketPlusInfo = await getRocketInfo(id);
        await plusInfoRocket(rocketPlusInfo);
        console.log(rocketPlusInfo);

        const rocketImg = await getRocketInfoCountry(id);
        await plusInfoRocket2 (rocketImg)
        console.log(rocketImg);

    });
}