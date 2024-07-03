export const InfoLaunchpads = async (plusInfo) => {

        
    document.querySelector("#header__title").innerHTML = plusInfo.name;
    

    document.querySelector(".section__information__2").innerHTML = /*html*/`
    <div class="launchpads2">

        <h3>Full name</h3>
        <p> ${plusInfo.full_name} </p>
        <hr>
        <h3>Locality</h3>
        <p> ${plusInfo.locality} </p>
        <hr>
        <h3>Region </h3>
        <p> ${plusInfo.region} </p>
        <hr>
        <h3>Latitude</h3>
        <p> ${plusInfo.latitude} </p>
        <hr>
        <h3>Longitude</h3>
        <p> ${plusInfo.longitude} </p>
        <hr>
        <h3>Launch attempts</h3>
        <p> ${plusInfo.launch_attempts} </p>
        <hr>
        <h3>Launch successes</h3>
        <p> ${plusInfo.launch_successes} </p>
        <hr>
        <h3>Rockets</h3>
        <p> ${plusInfo.rockets} </p>
        <br>
    
    </div>`;
    
    
    
    document.querySelector(".sucess_rate_rocket").innerHTML = /*html*/`
    <div class="launchpads3">


        <h3>Timezone</h3>
        <p> ${plusInfo.timezone} </p>
        <hr>
        <h3>Status</h3>
        <p> ${plusInfo.status} </p>
        <hr>
        <h3>Details</h3>
        <p> ${plusInfo.details} </p>
        <br>
    </div>`;
    
    
    document.querySelector(".section__image").innerHTML = /*html*/`
    <div class="launchpads4">
    
        <h3>id</h3>
        <p> ${plusInfo.id} </p>

    
        
    
    </div>
    `;
    
    }
    
    
    
    
    
        
    
    