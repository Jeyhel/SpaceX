
export const nameRocket = async (name) => {
    document.querySelector("#header__title").innerHTML = name;
}

export const plusInfoRocket = async (plusInfo) => {
    console.log(plusInfo);
    document.querySelector("#description__item").innerHTML = 
    /*html*/`
    <h3>Description</h3>
    <br>
    <p>${plusInfo.description}</p>
    <br>
    <div class="info">
       
        <img src="storage/img/circle1.png">
         <div class="info__item">
     <h4>Stages</h4>
     <br>
     <br>

     <h3>Reusable: ${plusInfo.first_stage.reusable }</h3>
     <h3>Engines: ${plusInfo.first_stage.engines }</h3>
     <h3>Fuel_amount_tons: ${plusInfo.first_stage.fuel_amount_tons }</h3>
     <h3>Burn_time_sec: ${plusInfo.first_stage.burn_time_sec }</h3>
   
     <div class ="info2">

     <img src="storage/img/circle2.png">
     </div>

     <h3>Reusable: ${plusInfo.second_stage.reusable }</h3>
     <h3>Engines: ${plusInfo.second_stage.engines }</h3>
     <h3>Fuel_amount_tons: ${plusInfo.second_stage.fuel_amount_tons}</h3>
     <h3>Burn_time_sec: ${plusInfo.second_stage.burn_time_sec }</h3>
            
    </div>` ;

}
export const plusInfoRocket2C = async (plusInfo) => {
    console.log(plusInfo);

    document.querySelector("#section__image").innerHTML = 
    /*html*/`
    <div class="country"> 
    <h1> Country</h1>
    <br>
    <button> <p>${plusInfo.country}</p> </button>
    </div>
    `;

};

export const plusInfoRocket3I = async (plusInfo) => {
    console.log(plusInfo);

    console.log(plusInfo.flickr_images)
    
    const img = async ()=>{
        let plantilla = '';
        let imagenes = plusInfo.flickr_images;
        imagenes.forEach(element => {
        plantilla +=/*html*/`<img src= ${element} referrerpolicy="no-referrer">`;
        });
        return plantilla;
    }
  

    console.log(await img());


    document.querySelector("#country_rocket").innerHTML = await img();

};




export const plusInfoRocketcircle1 = async (plusInfo) => {
    console.log(plusInfo);

    document.querySelector("#section__information__1").innerHTML = 
    /*html*/`
 <div class="item__progress__bar">
 <div class ="carousel__item"> 

    <h3>Height</h3>

    <p>Meters: ${plusInfo.height.meters }</p>
    <p>Feet: ${plusInfo.height.feet }</p>

    </div>
</div>
    
 
 <div class="item__progress__bar2">
    <div class ="carousel__item2"> 
        <h3>Diameter</h3>

        <p>Meters: ${plusInfo.diameter.meters }</p>
        <p>Feet: ${plusInfo.diameter.feet }</p>
    </div>
 </div>` ;

};

export const plusInfoRocketLines = async (plusInfo) => {
    console.log(plusInfo);

    document.querySelector("#information__2").innerHTML = 
    /*html*/`
    
    <div class="information"> 
    <h3>Engines</h3>
    <br>
            <p>Type: ${plusInfo.engines.type}</p>
            <p>Version: ${plusInfo.engines.version}</p>
            <p>Layout: ${plusInfo.engines.layout}</p>
            <p>Propellant_1: ${plusInfo.engines.propellant_1}</p>
            <p>Propellant_2: ${plusInfo.engines.propellant_2}</p>
            <p>Thrust_to_weight: ${plusInfo.engines.thrust_to_weight}</p>  
        </div>`;
          
};  
