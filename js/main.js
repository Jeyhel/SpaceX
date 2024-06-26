import {title} from "./components/header.js"

let header__title = document.querySelector("header__title")
header__title.innerHTML = await title();


addEventListener("DOMContentLoaded", async()=>{
    let info = await getAllRockets()
    info = info[0]
    console.log(info);
    
}); 