

export const InfoCrew = async (plusInfo) => {

        
document.querySelector("#header__title").innerHTML = plusInfo.name;


document.querySelector(".section__information__2").innerHTML = /*html*/`
<div class="crew1">
    <h4>Id </h4>
    <p> ${plusInfo.id} </p>

    <h3>Agency</h3>
    <p> ${plusInfo.agency} </p>

    <h3>Status</h3>
    <p> ${plusInfo.status} </p>
</div>`;

    
 
 document.querySelector(".sucess_rate_rocket").innerHTML = /*html*/`
 <div class="crew2">
    <h3>Launches</h3>
    <p> ${plusInfo.launches} </p>

    <a href = "${plusInfo.wikipedia}"> 
    <p> Click here..</p>
    </a>
 </div>`;

 
 document.querySelector(".section__image").innerHTML = /*html*/`
 <div class="crew3">
    
 </div>
 `;
 
}




    
        

