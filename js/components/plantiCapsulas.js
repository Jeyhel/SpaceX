

export const InfoCapsulas = async (plusInfo) => {
    console.log(plusInfo);

    document.querySelector("#header__title").innerHTML = plusInfo.serial;

    let launches = plusInfo.launches;
    let time = 0;

    launches.forEach(() => {
        time += 1;
        
    })
    
        
document.querySelector(".section__information__2").innerHTML = /*html*/`

<div class="capsula1">

        <div class="capsula01"> 
        <h3>Id of the Capsule</h3>
        <hr>
        <p> ${plusInfo.id} </p>
    </div>
        <div class="capsula02">
        <h3>Status</h3>
        <hr>
        <p> ${plusInfo.status} </p>
    </div>
    <div class="capsula03">
        <h3>Type</h3>
        <hr>
        <p> ${plusInfo.type} </p>
    </div>
 </div>`;


    document.querySelector(".sucess_rate_rocket").innerHTML = /*html*/`
<div class="capsula2">

    <div class="capsula21">
        <h3>Water_landings</h3>
        <hr>
        <p> ${plusInfo.water_landings} </p>
    </div>
    <div class="capsula22">
        <h3>Land_landings</h3>
        <hr>
        <p> ${plusInfo.land_landings} </p>
    </div>
    <div class="capsula23">
        <h3>Serial</h3>
        <hr>
        <p> ${plusInfo.serial} </p>
    </div>
 </div>`;




    document.querySelector(".section__image").innerHTML = /*html*/`
    <div class="capsula3">
    <h3>Launches</h3>
    <p> ${plusInfo.launches} </p>
    <h3>Last_update</h3>
    <p> ${plusInfo.last_update} </p>
    </div>`;
};