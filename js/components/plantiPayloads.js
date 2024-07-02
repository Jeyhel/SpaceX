

export const InfoPayloads = async (plusInfo) => {

        
    document.querySelector("#header__title").innerHTML = plusInfo.name;

    
    document.querySelector(".section__information__2").innerHTML = /*html*/`
    <div class="payloads1">
    <h4>type </h4>
    <p> ${plusInfo.type} </p>

    <h3>reused</h3>
        <p> ${plusInfo.reused} </p>

    <h3>launch</h3>
        <p> ${plusInfo.launch} </p>
    </div>

    <h3>customers</h3>
    <p> ${plusInfo.customers} </p>
</div>`;


document.querySelector(".sucess_rate_rocket").innerHTML = /*html*/`
<div class="payloads2">

<h3>orbit </h3>
<p> ${plusInfo.orbit} </p>

<h3>reference system </h3>
<p> ${plusInfo.reference_system} </p>

<h3>regime  </h3>
<p> ${plusInfo.regime} </p>

<h3>manufacturers</h3>
<p> ${plusInfo.manufacturers} </p>



</div>`;


document.querySelector(".section__image").innerHTML = /*html*/`

<div class="payloads3">

<h3>norad ids</h3>
<p> ${plusInfo.norad_ids} </p> 

<h3>nationalities </h3>
<p> ${plusInfo.nationalities} </p><br>
</div>

<h3>id </h3>
<p> ${plusInfo.id} </p>
</div>
`;

}





    

