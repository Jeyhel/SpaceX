

export const InfoCrew = async (plusInfo) => {

        
document.querySelector("#header__title").innerHTML = plusInfo.name;


document.querySelector(".section__information__2").innerHTML = /*html*/`


<div class="crew1">
        <div class="crew01"> 
            <h3>Id</h3>
            <hr>
            <p> ${plusInfo.id} </p>
        </div> <br>
        <div class="crew02">
            <h3>Agency</h3>
            <hr>
            <p> ${plusInfo.agency} </p>
            <br>
        </div>
</div>`;

    
 
 document.querySelector(".sucess_rate_rocket").innerHTML = /*html*/`


 <div class="crew2">
        <div class="crew20"> 
        <h3>Launches</h3>
            <hr>
            <p> ${plusInfo.launches} </p>
        </div> <br>
        
        <div class="crew22">
        <h3>Status</h3>
            <hr>
            <p> ${plusInfo.status} </p>
        </div><br>

        <div class="crew21">
        <h3> Wikipedia information...</h3>
            <hr>
            <a href = "${plusInfo.wikipedia}"> 
            <p> Click here..</p>
            </a>
        </div>
        

</div>`;



 
 document.querySelector(".section__image").innerHTML = /*html*/`
 <div class="crew3">
    <img src="${plusInfo.image}"referrerpolicy="no-referrer" width=300px heigth=350px>
 </div>
 `;
 
}




    
        

