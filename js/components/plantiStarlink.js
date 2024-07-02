export const InfoStarlink = async (plusInfo) => {

        
    document.querySelector("#header__title").innerHTML = plusInfo.spaceTrack.OBJECT_NAME;
    
    document.querySelector(".description__item").innerHTML = /*html*/`
    <div class="starlink1">

    <h3>COMMENT</h3>
    <p> ${plusInfo.spaceTrack.COMMENT} </p>

    <h3>CREATION DATE</h3>
    <p> ${plusInfo.spaceTrack.CREATION_DATE} </p>

    <h3>ORIGINATOR</h3>
    <p> ${plusInfo.spaceTrack.ORIGINATOR} </p>

    <h3>OBJECT ID</h3>
    <p> ${plusInfo.spaceTrack.OBJECT_ID} </p>

    
    </div>
    `;

    document.querySelector(".section__information__2").innerHTML = /*html*/`
    <div class="starlink2">
    
    

        <h3>REF_FRAME</h3>
        <p> ${plusInfo.spaceTrack.REF_FRAME} </p>
        <br>
    
        <h3>TIME_SYSTEM</h3>
        <p> ${plusInfo.spaceTrack.TIME_SYSTEM} </p>
        <br>
        <h3>MEAN_ELEMENT_THEORY</h3>
        <p> ${plusInfo.spaceTrack.MEAN_ELEMENT_THEORY} </p>
        <br>
        <h3>EPOCH</h3>
        <p> ${plusInfo.spaceTrack.EPOCH} </p>
        <br>
    
    </div>`;
    
    
    
    document.querySelector(".sucess_rate_rocket").innerHTML = /*html*/`
    <div class="starlink3">

        <h3>ECCENTRICITY</h3>
        <p> ${plusInfo.spaceTrack.ECCENTRICITY} </p>
        <h3>INCLINATION</h3>
        <p> ${plusInfo.spaceTrack.INCLINATION} </p>
        <br>

        <h3>MEAN_ANOMALY</h3>
        <p> ${plusInfo.spaceTrack.MEAN_ANOMALY} </p>
        <h3>CLASSIFICATION_TYPE</h3>
        <p> ${plusInfo.spaceTrack.CLASSIFICATION_TYPE} </p>
        <br>
        
        <h3>PERIOD</h3>
        <p> ${plusInfo.spaceTrack.PERIOD} </p>
        <h3>APOAPSIS</h3>
        <p> ${plusInfo.spaceTrack.APOAPSIS} </p>
        <h3>PERIAPSIS</h3>
        <p> ${plusInfo.spaceTrack.PERIAPSIS} </p>
        <br>
        
        
    </div>`;
    
    
    document.querySelector(".information__item").innerHTML = /*html*/`
    <div class="starlink4">
    
        <h3>OBJECT TYPE</h3>
        <p> ${plusInfo.spaceTrack.OBJECT_TYPE} </p>

        <h3>RCS SIZE</h3>
        <p> ${plusInfo.spaceTrack.RCS_SIZE} </p>

        <h3>OUNTRY CODE</h3>
        <p> ${plusInfo.spaceTrack.COUNTRY_CODE} </p>

        <h3>SITE</h3>
        <p> ${plusInfo.spaceTrack.SITE} </p>

        <h3>DECAY DATE</h3>
        <p> ${plusInfo.spaceTrack.DECAY_DATE} </p>

        <h3>LAUNCH DATE</h3>
        <p> ${plusInfo.spaceTrack.LAUNCH_DATE} </p>

        <h3>FILE</h3>
        <p> ${plusInfo.spaceTrack.FILE} </p>
        
    
    </div>
    `;
    
    }
    
    
    
    
    
        
    
    