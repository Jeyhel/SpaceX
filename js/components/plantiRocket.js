
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
export const plusInfoRocket2 = async (plusInfo) => {
    console.log(plusInfo);

    document.querySelector("#section__image").innerHTML = 
    /*html*/`
    <div class="country"> 
    <h1> Country</h1>
    <br>
    <p>${plusInfo.country}</p>
 
    </div>
    
    `;

};
