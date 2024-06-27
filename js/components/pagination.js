
import { getAllRocketsId, getOneNameRock, getRocketInfo, getRocketInfoCountry, getRocketInfoimages, getRocketInfocircle1} from "../module/rockets.js"
import { nameRocket, plusInfoRocket, plusInfoRocket2C, plusInfoRocket3I, plusInfoRocketcircle1 } from "./plantiRocket.js";


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

        const rocketCountry= await getRocketInfoCountry(id);
        await plusInfoRocket2C (rocketCountry)
        console.log(rocketCountry)

        const rocketImg = await getRocketInfoimages(id);
        await plusInfoRocket3I (rocketImg)
        console.log(rocketImg);

        const rocketCircle1 = await getRocketInfocircle1(id);
        await plusInfoRocketcircle1 (rocketCircle1)
        console.log(rocketCircle1);

        // const rocketCircle2 = await getRocketInfocircle2(id);
        // await plusInfoRocketcircle2 (rocketCircle2)
        // console.log(rocketCircle2);

    });
}