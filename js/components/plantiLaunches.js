

export const InfoLaunches = async (plusInfo) => {

        
    document.querySelector("#header__title").innerHTML = plusInfo.name;

    
    document.querySelector(".section__information__2").innerHTML = /*html*/`
    <div class="launches1">

         <h3>Reused</h3>
        <p> ${plusInfo.fairings.reused} </p>

        <h3>recovery_attempt</h3>
        <p> ${plusInfo.fairings.recovery_attempt} </p>

        <h3>Recovered</h3>
        <p> ${plusInfo.fairings.recovered} </p>

    </div>`;



document.querySelector(".sucess_rate_rocket").innerHTML = /*html*/`
<div class="launches2">

<h3>Youtube_id</h3>
<p> ${plusInfo.links.youtube_id} </p>
<br>
<a href = "${plusInfo.links.webcast}"> 
<p> Youtube ..Click here..</p>
</a>
<br>
<a href = "${plusInfo.links.article}"> 
<p> Article ..Click here..</p>
</a>
<br>
<a href = "${plusInfo.links.wikipedia}"> 
<p> Wikipedia ..Click here..</p>
</a>

</div>`;


document.querySelector(".section__image").innerHTML = /*html*/`
<div class="launches3">

    <h3>static_fire_date_utc </h3> 
    <p>${plusInfo.static_fire_date_utc} </p>

    <h3>static_fire_date_unix </h3> 
    <p>${plusInfo.static_fire_date_unix} </p>

    <h3>net </h3> 
    <p>${plusInfo.net} </p>

    <h3>window </h3> 
    <p>${plusInfo.window} </p>

    <h3>rocket </h3> 
    <p>${plusInfo.rocket} </p>

</div>
`;

}





    

