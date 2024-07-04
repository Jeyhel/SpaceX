

export const InfoShips = async (plusInfo) => {

    const launches = plusInfo.launches

    document.querySelector("#header__title").innerHTML = plusInfo.name;
    
    document.querySelector(".nav__description").innerHTML = /*html*/`
    <div class="ships1">
    <br>
    <h3> More information... </h3> 
    <br>
    <a href ="${plusInfo.link}">
    <p> Clik here...</p>
    </a>
    
    </div>
    `;

    document.querySelector(".section__information__2").innerHTML = /*html*/`
    <div class="ships2">
    
    

        <h3>Home port</h3>
        <p> ${plusInfo.home_port} </p>
        <hr>
        <h3>Legacy Id</h3>
        <p> ${plusInfo.legacy_id} </p>
        <hr>
        <h3>Type</h3>
        <p> ${plusInfo.type} </p>
        <br>
        <img id="meteorito" src="./storage/img/meteorito.avif" alt=""> 

    </div>`;
    
    
    
    document.querySelector(".sucess_rate_rocket").innerHTML = /*html*/`
    <div class="ships3">
        <h3>Active</h3>
        <p> ${plusInfo.active} </p>
        <hr>
    
        <h3>Roles</h3>
        <p> ${plusInfo.roles} </p>
        <hr>
        <h3>Imo</h3>
        <p> ${plusInfo.imo} </p>
        <hr>
        <h3>Mmsi</h3>
        <p> ${plusInfo.mmsi} </p>
        <br>
    </div>`;
    
    
    const ship = document.getElementById('information__2')
    let shipsHTML = '';
    launches.forEach(element => {
        shipsHTML += `
            <p>${element.name}</p>
        `;
    });

    console.log('elemento', shipsHTML)
    
    ship.innerHTML = `
        <div class="ships4">
        <br>
        <h3>Launches</h3>
        <hr>
        ${shipsHTML}
        <br>
        </div>
    `;
}

document.querySelector(".information__item").innerHTML = ships
    
    
    
    
        
    
    
    
    
    
    
    
        
    
    