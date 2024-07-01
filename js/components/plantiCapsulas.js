

export const InfoCapsulas = async (plusInfo) => {
    console.log(plusInfo);

    document.querySelector("#header__title").innerHTML = plusInfo.serial;

    let launches = plusInfo.launches;
    let time = 0;

    launches.forEach(() => {
        time += 1;
        
    })
    
        
document.querySelector(".section__information__2").innerHTML = /*html*/`
<div class="data">

<h4>Id of the Capsule </h4>

    <p> ${plusInfo.id} </p>
    <h3>Status</h3>
    <p> ${plusInfo.status} </p>
    <h3>Type</h3>
    <p> ${plusInfo.type} </p>
    </div>`;


    document.querySelector(".sucess_rate_rocket").innerHTML = /*html*/`
    <div class="numer2">
    <h3>Water_landings</h3>
    <p> ${plusInfo.water_landings} </p>
    <h3>Land_landings</h3>
    <p> ${plusInfo.land_landings} </p>
    <h3>Serial</h3>
    <p> ${plusInfo.serial} </p>
    </div>`;




    document.querySelector(".section__image").innerHTML = /*html*/`
    <div class="numer3">
    <h3>Launches</h3>
    <p> ${plusInfo.launches} </p>
    <h3>Last_update</h3>
    <p> ${plusInfo.last_update} </p>
    </div>`;
};