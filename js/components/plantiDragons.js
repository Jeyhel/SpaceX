export const InfoDragons = async (plusInfo) => {

        
    document.querySelector("#header__title").innerHTML = plusInfo.name;

    document.querySelector(".nav__description").innerHTML = /*html*/`
    <div class="dragons1">
    <br>
    <h3>Description</h3>
    <hr>
    <p> ${plusInfo.description} </p>
    <br>
    </div>
    <img id="wow" src="./storage/img/wowww.avif" alt=""> 

    `;

    document.querySelector(".section__information__2").innerHTML = /*html*/`
    <div class="dragons2">
    
    

        <h3>Material</h3>
        <p> ${plusInfo.heat_shield.material} </p>
        <br>
    
        <h3>Size_meters</h3>
        <p> ${plusInfo.heat_shield.size_meters} </p>
        <br>
        <h3>Temp degrees </h3>
        <p> ${plusInfo.heat_shield.temp_degrees} </p>
        <br>
        <h3>Dev partner</h3>
        <p> ${plusInfo.heat_shield.dev_partner} </p>
        <br>
    
    </div>`;
    
    
    
    document.querySelector(".sucess_rate_rocket").innerHTML = /*html*/`
    <div class="dragons3">

        <h3>Launch_payload_mass</h3>
        <h4>Kg</h4>
        <p> ${plusInfo.launch_payload_mass.kg} </p>
        <h4>Lb</h4>
        <p> ${plusInfo.launch_payload_mass.lb} </p>
        <br>

        <h3>Launch_payload_vol</h3>
        <h4>Cubic_meters</h4>
        <p> ${plusInfo.launch_payload_vol.cubic_meters} </p>
        <h4>Cubic_feet</h4>
        <p> ${plusInfo.launch_payload_vol.cubic_feet} </p>
        <br>
        
        <h3>Payload_volume</h3>
        <h4>Cubic_meters</h4>
        <p> ${plusInfo.pressurized_capsule.payload_volume.cubic_meters} </p>
        <h4>Cubic_feet</h4>
        <p> ${plusInfo.pressurized_capsule.payload_volume.cubic_feet} </p>
        <br>
        
        <h3>Cargo</h3>
        <h4>Solar_array</h4>
        <p> ${plusInfo.trunk.cargo.solar_array} </p>
        <h4>Cubic_feet</h4>
        <p> ${plusInfo.trunk.cargo.unpressurized_cargo} </p>
        <br>
        
    </div>`;
    
    
    document.querySelector(".information__item").innerHTML = /*html*/`
    <div class="dragons4">
    
        <h3>Type</h3>
        <p> ${plusInfo.type} </p>
        <hr>
        <h3>Active</h3>
        <p> ${plusInfo.active} </p>
        <hr>
        <h3>Crew capacity</h3>
        <p> ${plusInfo.crew_capacity} </p>
        <hr>
        <h3>Sidewall angle deg</h3>
        <p> ${plusInfo.sidewall_angle_deg} </p>
        <hr>
        <h3>Orbit duration yr</h3>
        <p> ${plusInfo.orbit_duration_yr} </p>
        <hr>
        <h3>Dry mass kg</h3>
        <p> ${plusInfo.dry_mass_kg} </p>
        <hr>
        <h3>Dry mass lb</h3>
        <p> ${plusInfo.dry_mass_lb} </p>
        
    
    </div>
    `;
    

       
    document.querySelector(".section__image").innerHTML = /*html*/`
    <div class="dragons5">

    <h3>More Information </h3>
  
    <a href ="${plusInfo.wikipedia}">
    <p> Clik here</p>
    </a>
    <hr>
    <h3>ID</h3>
    <p> ${plusInfo.id} </p>
    
    </div>
    </div>
    `;
    
    }
    
    
    
    
    
        
    
    