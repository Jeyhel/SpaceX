

export const InfoLaunches = async (plusInfo) => {

        
    document.querySelector("#header__title").innerHTML = plusInfo.name;

    
    document.querySelector(".section__information__2").innerHTML = /*html*/`
    <div class="launches1">
        <h3>Reused</h3>
        <p> ${plusInfo.fairings.reused} </p>
        <hr>
        <h3>Recovery Attempt</h3>
        <p> ${plusInfo.fairings.recovery_attempt} </p>
        <hr>
        <h3>Recovered</h3>
        <p> ${plusInfo.fairings.recovered} </p> 
        <hr>
        <h3>Static_fire_date_utc </h3> 
        <p>${plusInfo.static_fire_date_utc} </p>
        <hr>
        <h3>Static_fire_date_unix </h3> 
        <p>${plusInfo.static_fire_date_unix} </p>
        <hr>
        <h3>Net </h3> 
        <p>${plusInfo.net} </p>
        <hr>
        <h3>Window </h3> 
        <p>${plusInfo.window} </p>
        <hr>
        <h3>Rocket </h3> 
        <p>${plusInfo.rocket} </p>
       
    </div>`;



document.querySelector(".sucess_rate_rocket").innerHTML = /*html*/`
<div class="launches2">

    <h3>Youtube_id</h3>
    <p> ${plusInfo.links.youtube_id} </p>
    <hr>
    <h3>Youtube</h3>
    <a href = "${plusInfo.links.webcast}"> 
    <p> Click here</p>
    </a>
    <hr>

    <h3>Article</h3>
    <a href = "${plusInfo.links.article}"> 
    <p> Click here</p>
    </a>
    <hr>

    <h3>Wikipedia</h3>
    <a href = "${plusInfo.links.wikipedia}"> 
    <p> Click here</p>
    </a> <br>

</div>`;


document.querySelector(".section__image").innerHTML = /*html*/`
<div class="launches3">

<img id="giflaunches" src="./storage/img/giflaucnhes.gif" alt="">     
</div>
`;

}





    

