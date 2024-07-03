

export const InfoRoadster = async (plusInfo) => {

        
    document.querySelector("#header__title").innerHTML = plusInfo.name;
    
    document.querySelector(".nav__description").innerHTML = /*html*/`
    <div class="roadster1">

        <h3> Launch date utc</h3> 
        <p> ${plusInfo.launch_date_utc} </p>
<hr>
        <h3> Launch date unix</h3> 
        <p> ${plusInfo.launch_date_unix} </p>
        <hr>
        <h3> Launch mass kg</h3> 
        <p> ${plusInfo.launch_mass_kg} </p>
        <hr>
        <h3> Launch mass lbs</h3> 
        <p> ${plusInfo.launch_mass_lbs} </p>
        <hr>
        <h3> Norad id</h3> 
        <p> ${plusInfo.norad_id} </p>
        <hr>
        <h3> Epoch jd</h3>
        <p> ${plusInfo.epoch_jd} </p>
        <hr>
        <h3> Epoch orbit type</h3>
        <p> ${plusInfo.orbit_type} </p>
        <hr>
        <h3> Apoapsis au </h3>
        <p> ${plusInfo.apoapsis_au} </p>
        <hr>
        <h3> Semi_major_axis_au </h3>
        <p> ${plusInfo.semi_major_axis_au} </p>
        <hr>
        <h3> Periapsis au</h3>
        <p> ${plusInfo.periapsis_au} </p>
 
    
    </div>
    `;

    document.querySelector(".section__information__2").innerHTML = /*html*/`
    <div class="roadster2">
    <br>

    <h3>Wikipedia information...</h3>
        <a href = "${plusInfo.wikipedia}">
        <p>Read more</p>
        </a>
        <br>     <br>
        <h3>Youtube...</h3>
        <a href = "${plusInfo.video}">
        <p>Read more</p>
        </a>
    
    
    </div>`;
    
    
    
    document.querySelector(".sucess_rate_rocket").innerHTML = /*html*/`
    <div class="roadster3">

    <h3>Details</h3>
    <p> ${plusInfo.details} </p>

    </div>`;
    
    
    document.querySelector(".information__item").innerHTML = /*html*/`
    <div class="roadster4">
    <br>
        <h3>Eccentricity</h3>
        <p> ${plusInfo.eccentricity} </p>
        <hr>
        <h3>Inclination</h3>
        <p> ${plusInfo.inclination} </p>
        <hr>
        <h3>Longitude</h3>
        <p> ${plusInfo.longitude} </p>
        <hr>
        <h3>Earth_distance_km</h3>
        <p> ${plusInfo.earth_distance_km} </p>
        <hr>
        <h3>Earth_distance_mi</h3>
        <p> ${plusInfo.earth_distance_mi} </p>
        <hr>
        <h3>Mars_distance_km</h3>
        <p> ${plusInfo.mars_distance_km} </p>
        <hr>
        <h3>Mars_distance_mi</h3>
        <p> ${plusInfo.mars_distance_mi} </p>
    
    </div>
    `;
    
    }
    
    
    
    
    
        
    
    