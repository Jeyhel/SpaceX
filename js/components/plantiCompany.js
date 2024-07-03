

export const InfoCompany = async (plusInfo) => {

        
    document.querySelector("#header__title").innerHTML = plusInfo.name;
    
    document.querySelector(".nav__description").innerHTML = /*html*/`
    <div class="company1">

        <h3> Founder</h3> 
        <p> ${plusInfo.founder} </p>    
        <hr>
        <h3> Founded</h3> 
        <p> ${plusInfo.founded} </p>
        <hr>
        <h3> Employees</h3> 
        <p> ${plusInfo.employees} </p>
        <hr>
        <h3> Vehicles</h3> 
        <p> ${plusInfo.vehicles} </p>
        <hr>
        <h3> Launch_sites</h3> 
        <p> ${plusInfo.launch_sites} </p>
        <hr>
        <h3> Test_sites</h3>
        <p> ${plusInfo.test_sites} </p>
 
    
    </div>
    `;

    document.querySelector(".section__information__2").innerHTML = /*html*/`
    <div class="company2">
    

        <h3>Address</h3>
        <p> ${plusInfo.headquarters.address} </p>
        <br>
    
        <h3>City</h3>
        <p> ${plusInfo.headquarters.city} </p>
        <br>
        <h3>State </h3>
        <p> ${plusInfo.headquarters.state} </p>
        <br>
    
    </div>`;
    
    
    
    document.querySelector(".sucess_rate_rocket").innerHTML = /*html*/`
    <div class="company3">

    <h3> Website</h3>
        <a href ="${plusInfo.links.website}"> 
        <p> Read me..</p>
        </a>
    <h3> Twitter</h3>
        <a href ="${plusInfo.links.twitter}"> 
        <p> Read me..</p>
        </a>
    <h3> Elon_twitter</h3>
        <a href ="${plusInfo.links.elon_twitter}"> 
        <p> Read me..</p>
        </a>


    </div>`;
    
    
    document.querySelector(".information__item").innerHTML = /*html*/`
    <div class="company4">
    
        <h3>Ceo</h3>
        <p> ${plusInfo.ceo} </p>
        <hr>
        <h3>Cto</h3>
        <p> ${plusInfo.cto} </p>
        <hr>
        <h3>Coo</h3>
        <p> ${plusInfo.coo} </p>
        <hr>
        <h3>Cto_propulsion</h3>
        <p> ${plusInfo.cto_propulsion} </p>
        <hr>
        <h3>Valuation</h3>
        <p> ${plusInfo.valuation} </p>
        <hr>
        <h3>Summary</h3>
        <p> ${plusInfo.summary} </p>
        <hr>
        <h3>Id</h3>
        <p> ${plusInfo.id} </p>
    
    </div>
    `;
    
    }
    
    
    
    
    
        
    
    