

export const InfoPayloads = async (plusInfo) => {

        
    document.querySelector("#header__title").innerHTML = plusInfo.name;

    
    document.querySelector(".section__information__2").innerHTML = /*html*/`
    <div class="payloads1">

    <h3>Type </h3>
    <p> ${plusInfo.type} </p>
    <hr>
    <h3>Reused</h3>
        <p> ${plusInfo.reused} </p>
     <hr>
    <h3>Launch</h3>
        <p> ${plusInfo.launch} </p>
     <hr>
    <h3>Customers</h3>
    <p> ${plusInfo.customers} </p>
    <br>
    </div>
</div>`;


document.querySelector(".sucess_rate_rocket").innerHTML = /*html*/`
<div class="payloads2">

    <h3>Orbit </h3>
    <p> ${plusInfo.orbit} </p>
    <hr>
    <h3>Reference system </h3>
    <p> ${plusInfo.reference_system} </p>
    <hr>
    <h3>Regime  </h3>
    <p> ${plusInfo.regime} </p>
    <hr>
    <h3>Manufacturers</h3>
    <p> ${plusInfo.manufacturers} </p>
    <br>

</div>`;


document.querySelector(".section__image").innerHTML = /*html*/`

<div class="payloads3">

    <h3>Norad ids</h3>
    <p> ${plusInfo.norad_ids} </p> 
    <hr>

    <h3>Nationalities </h3>
    <p> ${plusInfo.nationalities} </p><br>

    <h3>Id </h3>
    <p> ${plusInfo.id} </p>

</div>
`;

}





    

