

export const InfoLandpads = async (plusInfo) => {

        
    document.querySelector("#header__title").innerHTML = plusInfo.full_name;
    
    document.querySelector(".nav__description").innerHTML = /*html*/`
    <div class="landpads1">
    
    <h3>Details</h3>
    <p> ${plusInfo.details} </p>
    
    </div>
    `;

    document.querySelector(".section__information__2").innerHTML = /*html*/`
    <div class="landpads2">
    
    

        <h3>name</h3>
        <p> ${plusInfo.name} </p>
        <br>
    
        <h3>type</h3>
        <p> ${plusInfo.type} </p>
        <br>
        <h3>locality</h3>
        <p> ${plusInfo.locality} </p>
        <br>
        <h3>region</h3>
        <p> ${plusInfo.region} </p>
        <br>
    
    </div>`;
    
    
    
    document.querySelector(".sucess_rate_rocket").innerHTML = /*html*/`
    <div class="landpads3">
        <h3>landing_successes</h3>
        <p> ${plusInfo.landing_successes} </p>
        <br>
    
        <h3>landing_attempts</h3>
        <p> ${plusInfo.landing_attempts} </p>
        <br>
        <h3>longitude</h3>
        <p> ${plusInfo.longitude} </p>
        <br>
        <h3>latitude</h3>
        <p> ${plusInfo.latitude} </p>
        <br>
    </div>`;
    
    
    document.querySelector(".information__item").innerHTML = /*html*/`
    <div class="landpads4">
    
        <h3>Launches</h3>
        <p> ${plusInfo.launches} </p>
    
    </div>
    `;
    
    }
    
    
    
    
    
        
    
    