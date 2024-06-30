export const InfoCapsules = async (info) => {
    console.log(info);

    document.querySelector("#header__title").innerHTML = info.serial;

    let launches = info.launches;
    let time = 0;

    launches.forEach(() => {
        time += 1;
    })

    console.log(time);};

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