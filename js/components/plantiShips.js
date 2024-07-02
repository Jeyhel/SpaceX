

export const InfoShips = async (plusInfo) => {

        
    document.querySelector("#header__title").innerHTML = plusInfo.name;
    
    document.querySelector(".description__item").innerHTML = /*html*/`
    <div class="ships1">

    <a href ="${plusInfo.link}">
    <p> Clik here...</p>
    </a>
    
    </div>
    `;

    document.querySelector(".section__information__2").innerHTML = /*html*/`
    <div class="ships2">
    
    

        <h3>home_port</h3>
        <p> ${plusInfo.home_port} </p>
        <br>
    
        <h3>status</h3>
        <p> ${plusInfo.status} </p>
        <br>
        <h3>legacy Id</h3>
        <p> ${plusInfo.legacy_id} </p>
        <br>
        <h3>type</h3>
        <p> ${plusInfo.type} </p>
        <br>
    
    </div>`;
    
    
    
    document.querySelector(".sucess_rate_rocket").innerHTML = /*html*/`
    <div class="ships3">
        <h3>active</h3>
        <p> ${plusInfo.active} </p>
        <br>
    
        <h3>roles</h3>
        <p> ${plusInfo.roles} </p>
        <br>
        <h3>imo</h3>
        <p> ${plusInfo.imo} </p>
        <br>
        <h3>mmsi</h3>
        <p> ${plusInfo.mmsi} </p>
        <br>
    </div>`;
    
    
    document.querySelector(".information__item").innerHTML = /*html*/`
    <div class="ships4">
    
        <h3>Launches</h3>
        <p> ${plusInfo.launches} </p>
    
    </div>
    `;
    
    }
    
    
    
    
    
        
    
    