

export const InfoCores = async (plusInfo) => {

        
document.querySelector("#header__title").innerHTML = plusInfo.serial;


document.querySelector(".section__information__2").innerHTML = /*html*/`
<div class="cores1">

    <h3>Last update</h3>
    <HR>
    <p> ${plusInfo.last_update} </p>

</div>`;



document.querySelector(".sucess_rate_rocket").innerHTML = /*html*/`
<div class="cores2">
    <h3>Launches</h3>
    <p> ${plusInfo.launches} </p>
    <br>

    <h3>Serial</h3>
    <p> ${plusInfo.serial} </p>
    <br>
    <h3>Status</h3>
    <p> ${plusInfo.status} </p>
    <br>
</div>`;


document.querySelector(".section__image").innerHTML = /*html*/`
<div class="cores3">

    <h3>ID</h3>
    <hr>
    <p> ${plusInfo.id} </p>

</div>
`;

}





    

