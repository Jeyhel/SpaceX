

export const InfoRoadster = async (plusInfo) => {

        
    document.querySelector("#header__title").innerHTML = plusInfo.name;
    
    document.querySelector(".nav__description").innerHTML = /*html*/`
    <div class="roadster1">

        <h3> launch date utc</h3> 
        <p> ${plusInfo.launch_date_utc} </p>

        <h3> launch date unix</h3> 
        <p> ${plusInfo.launch_date_unix} </p>

        <h3> launch mass kg</h3> 
        <p> ${plusInfo.launch_mass_kg} </p>

        <h3> launch mass lbs</h3> 
        <p> ${plusInfo.launch_mass_lbs} </p>

        <h3> norad id</h3> 
        <p> ${plusInfo.norad_id} </p>

        <h3> epoch jd</h3>
        <p> ${plusInfo.epoch_jd} </p>

        <h3> epoch orbit type</h3>
        <p> ${plusInfo.orbit_type} </p>

        <h3> apoapsis au </h3>
        <p> ${plusInfo.apoapsis_au} </p>

        <h3> semi_major_axis_au </h3>
        <p> ${plusInfo.semi_major_axis_au} </p>

        <h3>periapsis au</h3>
        <p> ${plusInfo.periapsis_au} </p>
 
    
    </div>
    `;

    document.querySelector(".country_rocket").innerHTML = /*html*/`
    <div class="roadster2">
    
        <a href = "${plusInfo.wikipedia}">
        <p>wikipedia information...</p>
        </a>

        <a href = "${plusInfo.video}">
        <p>Youtube...</p>
        </a>
    
    </div>`;
    
    
    
    document.querySelector(".sucess_rate_rocket").innerHTML = /*html*/`
    <div class="roadster3">

    <h3>details</h3>
    <p> ${plusInfo.details} </p>

    </div>`;
    
    
    document.querySelector(".information__item").innerHTML = /*html*/`
    <div class="roadster4">
    
        <h3>eccentricity</h3>
        <p> ${plusInfo.eccentricity} </p>
        <h3>inclination</h3>
        <p> ${plusInfo.inclination} </p>
        <h3>longitude</h3>
        <p> ${plusInfo.longitude} </p>
        <h3>earth_distance_km</h3>
        <p> ${plusInfo.earth_distance_km} </p>
        <h3>earth_distance_mi</h3>
        <p> ${plusInfo.earth_distance_mi} </p>
        <h3>mars_distance_km</h3>
        <p> ${plusInfo.mars_distance_km} </p>
        <h3>mars_distance_mi</h3>
        <p> ${plusInfo.mars_distance_mi} </p>
    
    </div>
    `;
    
    }
    
    
    
    
    
        
    
    