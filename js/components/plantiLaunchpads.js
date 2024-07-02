export const InfoLaunchpads = async (plusInfo) => {

        
    document.querySelector("#header__title").innerHTML = plusInfo.name;
    

    document.querySelector(".section__information__2").innerHTML = /*html*/`
    <div class="launchpads2">

        <h3>full_name</h3>
        <p> ${plusInfo.full_name} </p>
        <br>
    
        <h3>locality</h3>
        <p> ${plusInfo.locality} </p>
        <br>
        <h3>region </h3>
        <p> ${plusInfo.region} </p>
        <br>
        <h3>latitude</h3>
        <p> ${plusInfo.latitude} </p>
        <br>
        <h3>longitude</h3>
        <p> ${plusInfo.longitude} </p>
        <br>
        <h3>launch_attempts</h3>
        <p> ${plusInfo.launch_attempts} </p>
        <br>
        <h3>launch_successes</h3>
        <p> ${plusInfo.launch_successes} </p>
        <br>
        <h3>rockets</h3>
        <p> ${plusInfo.rockets} </p>
        <br>
    
    </div>`;
    
    
    
    document.querySelector(".sucess_rate_rocket").innerHTML = /*html*/`
    <div class="launchpads3">


        <h3>timezone</h3>
        <p> ${plusInfo.timezone} </p>

        <h3>status</h3>
        <p> ${plusInfo.status} </p>
        
        <h3>details</h3>
        <p> ${plusInfo.details} </p>
        
    </div>`;
    
    
    document.querySelector(".section__image").innerHTML = /*html*/`
    <div class="launchpads4">
    
        <h3>id</h3>
        <p> ${plusInfo.id} </p>

    
        
    
    </div>
    `;
    
    }
    
    
    
    
    
        
    
    