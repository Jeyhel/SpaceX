
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
    <img id ="icono1"src="storage/img/rayo2.gif">
    <img id ="icono2"src="storage/img/rayo2.gif">
 
    <div class="info">

        <div class="info__item">
        <h4>Stages</h4>
        <br> <br>
     
     <p>Reusable: ${plusInfo.first_stage.reusable }</p>
     <p>Engines: ${plusInfo.first_stage.engines }</p>
     <p>Fuel_amount_tons: ${plusInfo.first_stage.fuel_amount_tons }</p>
     <p>Burn_time_sec: ${plusInfo.first_stage.burn_time_sec }</p>
   
     <div class ="info2">

     </div>

     <p>Reusable: ${plusInfo.second_stage.reusable }</p>
     <p>Engines: ${plusInfo.second_stage.engines }</p>
     <p>Fuel_amount_tons: ${plusInfo.second_stage.fuel_amount_tons}</p>
     <p>Burn_time_sec: ${plusInfo.second_stage.burn_time_sec }</p>

     <a href = "${plusInfo.wikipedia}"> 
     <p>Wikipedia....<p>
     </a>
     <img id="gif3men" src="./storage/img/gif3.gif" alt="">
            
    </div>` ;

}
export const plusInfoRocket2C = async (plusInfo) => {
    console.log(plusInfo);

    document.querySelector("#country_rocket").innerHTML = 
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


    document.querySelector("#section__image").innerHTML = await img();

};




export const plusInfoRocketcircle1 = async (plusInfo) => {
    console.log(plusInfo);

    document.querySelector("#section__information__1").innerHTML = 
    /*html*/`
 <div class="item__progress__bar">
 <div class ="carousel__item"> 
 <img id="gifHand" src="./storage/img/gifhand.gif" alt="">

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


export const plusInfoRocketcircle3 = async (plusInfo) => {
    console.log(plusInfo);

    document.querySelector("#sucess_rate_rocket").innerHTML = 
    /*html*/`
    <div class="item__progress__bar3">
    <div class ="carousel__item3"> 
    <h3>Mass</h3>

        <p>kg: ${plusInfo.mass.kg}</p>
        <p>Lb: ${plusInfo.mass.lb}</p>
    </div>
 </div>` ;


};

export const plusInfoRocketInfodown1 = async (plusInfo) => {
    console.log(plusInfo);

    document.querySelector("#information__table__1").innerHTML = 
    /*html*/`

   
    <h3>Engines</h3>
    <br>
    <hr>
    <br>
            <div class="information1">
                <p>Type </p>
                <p>${plusInfo.engines.type} </p>
            </div><br>

            <div class="information01">
            <br>
                <p>Version </p>
                <p> ${plusInfo.engines.version}</p>
            </div><br>

                <div class="information02">
            <br>
                <p>Propellant_1: </p>
                <p>${plusInfo.engines.propellant_1}</p>
            </div> <br>
            
            <div class="information03">
            <br>
                <p>Propellant_2: </p>
                <p>${plusInfo.engines.propellant_2}</p>
            </div>  <br>
            <div class="information04">
            <br>
                <p>Thrust_to_weight: <p>
                <p>${plusInfo.engines.thrust_to_weight}</p>
                <br> 
                </div> `;

};

export const plusInfoRocketInfodown2 = async (plusInfo) => {
    console.log(plusInfo);

    document.querySelector("#information__table__2").innerHTML = 
    /*html*/`
    <h3>More Information Engines </h3>
    <br>
    <hr>
    <p>Isp</p>
    <hr>
    <br>
    <div class="infoDown2"> 
        <p> Sea_level </p>
        <p>(${plusInfo.engines.isp.sea_level}) </p>
    </div> 
    <br>
    <div class="infoDown20"> 
        <p> Vacuum </p>
        <p>(${plusInfo.engines.isp.vacuum}) </p>
    </div> 
    <br>
    <hr>
    <p> Thrust_sea_level  </p>
    <hr>
    <br>
        <div class="infoDown002"> 
            <p> KN </p>
            <p>(${plusInfo.engines.thrust_sea_level.kN}) </p>
        </div>
        <br>
        <div class="infoDown0022"> 
            <p> LBF </p>
            <p>(${plusInfo.engines.thrust_sea_level.lbf}) </p>
        </div>
    <br>
    <hr>
    <p> Thrust_vacuum  </p>
    <hr>
    <br>
        <div class="infoDown003"> 
            <p> KN </p>
            <p>(${plusInfo.engines.thrust_sea_level.kN})</p>
        </div> 
        <br>
        <div class="infoDown0030"> 
            
            <p> LBF </p>
            <p>(${plusInfo.engines.thrust_sea_level.lbf}) </p>
        `;
          
};  


export const plusInfoRocketLines = async (plusInfo) => {
    console.log(plusInfo);

    document.querySelector("#information__2").innerHTML = 

    /*html*/`  
    <h3> Payloads </h3>
    <br>
    
    <div class="infoDown1">
    <img id="gif2moon1" src="./storage/img/gif2.gif" alt="">
    <img id="gif2moon2" src="./storage/img/gif2.gif" alt="">
    <img id="gif2moon3" src="./storage/img/gif2.gif" alt="">

    <p> Thrust </p>
    <p> kN (${plusInfo.second_stage.thrust.kN }) </p>
    <p>  <progress> <p>
    <p> LBF (${plusInfo.second_stage.thrust.lbf})</p>
    </div>     
    
    <br><br>
    <div class="infoDown01"> 

         <p>Composite Fairing</p> 
         <p> Height </p>
    <p> <progress></p>
        <p> Meters (${plusInfo.second_stage.payloads.composite_fairing.height.meters}) 
        <p> Feet (${plusInfo.second_stage.payloads.composite_fairing.height.feet})</p>
    </div>
    <br><br>
    <div class="infoDown02"> 
    <img id="gif1world" src="./storage/img/gif1.gif" alt="">
        <p>Option 1 </p>
        <p> <progress> </p>
        <p>(${plusInfo.second_stage.payloads.option_1})</p>
    

    </div> `;

    
};  
          
