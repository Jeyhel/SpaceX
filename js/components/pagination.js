
import { getAllRocketsId, getOneNameRock, getRocketInfo, getRocketInfoCountry, getRocketInfoimages, getRocketInfocircle1, getRocketInfoDownIzq, getRocketInfoDownDer, getRocketInfoLines } from "../module/rockets.js"
import { nameRocket, plusInfoRocket, plusInfoRocket2C, plusInfoRocket3I, plusInfoRocketcircle1, plusInfoRocketInfodown1, plusInfoRocketInfodown2, plusInfoRocketLines } from "./plantiRocket.js";


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
        
        const rocketDown1 = await getRocketInfoDownIzq(id);
        await plusInfoRocketInfodown1 (rocketDown1)
        console.log(rocketDown1);

        const rocketDown2 = await getRocketInfoDownDer(id);
        await plusInfoRocketInfodown2 (rocketDown2)
        console.log(rocketDown2);

        const rocketLines = await getRocketInfoLines(id);
        await plusInfoRocketLines (rocketLines)
        console.log(rocketLines);
        
    });
}