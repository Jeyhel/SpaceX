
export const InfoCores = async (plusInfo) => {

        
document.querySelector("#header__title").innerHTML = plusInfo.serial;


document.querySelector(".section__information__2").innerHTML = /*html*/`
<img id="gifcores" src="./storage/img/cores.gif" alt=""> 


<div class="cores1">

<h3>Last update</h3>
<HR>
<p> ${plusInfo.last_update} </p>
<h3>ID</h3>
<hr>
<p> ${plusInfo.id} </p>

</div>`;



document.querySelector(".sucess_rate_rocket").innerHTML = /*html*/`
<div class="cores2">
<h3>Launches</h3>
<p> ${plusInfo.launches} </p>
<hr>

<h3>Serial</h3>
<p> ${plusInfo.serial} </p>
<hr>
<h3>Status</h3>
<p> ${plusInfo.status} </p>

<img id="misil" src="./storage/img/misill.gif" alt=""> 
</div>`;


}





    

