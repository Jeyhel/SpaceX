export const InfoDragons = async (plusInfo) => {

        
    document.querySelector("#header__title").innerHTML = plusInfo.name;
    
    document.querySelector(".description__item").innerHTML = /*html*/`
    <div class="dragons1">

    <h3>description</h3>
    <p> ${plusInfo.description} </p>

    <h3>More Information... </h3>
    <a href ="${plusInfo.wikipedia}">
    <p> Clik here...</p>
    </a>

    <h3>ID</h3>
    <p> ${plusInfo.id} </p>
    
    </div>
    `;

    document.querySelector(".section__information__2").innerHTML = /*html*/`
    <div class="dragons2">
    
    

        <h3>material</h3>
        <p> ${plusInfo.heat_shield.material} </p>
        <br>
    
        <h3>size_meters</h3>
        <p> ${plusInfo.heat_shield.size_meters} </p>
        <br>
        <h3>temp_degrees </h3>
        <p> ${plusInfo.heat_shield.temp_degrees} </p>
        <br>
        <h3>dev_partner</h3>
        <p> ${plusInfo.heat_shield.dev_partner} </p>
        <br>
    
    </div>`;
    
    
    
    document.querySelector(".sucess_rate_rocket").innerHTML = /*html*/`
    <div class="dragons3">

        <h3>Launch_payload_mass</h3>
        <h4>kg</h4>
        <p> ${plusInfo.launch_payload_mass.kg} </p>
        <h4>lb</h4>
        <p> ${plusInfo.launch_payload_mass.lb} </p>
        <br>

        <h3>Launch_payload_vol</h3>
        <h4>cubic_meters</h4>
        <p> ${plusInfo.launch_payload_vol.cubic_meters} </p>
        <h4>cubic_feet</h4>
        <p> ${plusInfo.launch_payload_vol.cubic_feet} </p>
        <br>
        
        <h3>Payload_volume</h3>
        <h4>cubic_meters</h4>
        <p> ${plusInfo.pressurized_capsule.payload_volume.cubic_meters} </p>
        <h4>cubic_feet</h4>
        <p> ${plusInfo.pressurized_capsule.payload_volume.cubic_feet} </p>
        <br>
        
        <h3>cargo</h3>
        <h4>solar_array</h4>
        <p> ${plusInfo.trunk.cargo.solar_array} </p>
        <h4>cubic_feet</h4>
        <p> ${plusInfo.trunk.cargo.unpressurized_cargo} </p>
        <br>
        
    </div>`;
    
    
    document.querySelector(".information__item").innerHTML = /*html*/`
    <div class="dragons4">
    
        <h3>type</h3>
        <p> ${plusInfo.type} </p>

        <h3>active</h3>
        <p> ${plusInfo.active} </p>

        <h3>crew capacity</h3>
        <p> ${plusInfo.crew_capacity} </p>

        <h3>sidewall angle deg</h3>
        <p> ${plusInfo.sidewall_angle_deg} </p>

        <h3>orbit duration yr</h3>
        <p> ${plusInfo.orbit_duration_yr} </p>

        <h3>dry mass kg</h3>
        <p> ${plusInfo.dry_mass_kg} </p>

        <h3>dry mass lb</h3>
        <p> ${plusInfo.dry_mass_lb} </p>
        
    
    </div>
    `;
    
    }
    
    
    
    
    
        
    
    