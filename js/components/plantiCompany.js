

export const InfoCompany = async (plusInfo) => {

        
    document.querySelector("#header__title").innerHTML = plusInfo.name;
    
    document.querySelector(".description__item").innerHTML = /*html*/`
    <div class="company1">

        <h3> founder</h3> 
        <p> ${plusInfo.founder} </p>

        <h3> founded</h3> 
        <p> ${plusInfo.founded} </p>

        <h3> employees</h3> 
        <p> ${plusInfo.employees} </p>

        <h3> vehicles</h3> 
        <p> ${plusInfo.vehicles} </p>

        <h3> launch_sites</h3> 
        <p> ${plusInfo.launch_sites} </p>

        <h3> test_sites</h3>
        <p> ${plusInfo.test_sites} </p>
 
    
    </div>
    `;

    document.querySelector(".section__information__2").innerHTML = /*html*/`
    <div class="company2">
    

        <h3>address</h3>
        <p> ${plusInfo.headquarters.address} </p>
        <br>
    
        <h3>city</h3>
        <p> ${plusInfo.headquarters.city} </p>
        <br>
        <h3>state </h3>
        <p> ${plusInfo.headquarters.state} </p>
        <br>
    
    </div>`;
    
    
    
    document.querySelector(".sucess_rate_rocket").innerHTML = /*html*/`
    <div class="company3">

    <h3> website</h3>
        <a href ="${plusInfo.links.website}"> 
        <p> Read me..</p>
        </a>
    <h3> twitter</h3>
        <a href ="${plusInfo.links.twitter}"> 
        <p> Read me..</p>
        </a>
    <h3> elon_twitter</h3>
        <a href ="${plusInfo.links.elon_twitter}"> 
        <p> Read me..</p>
        </a>


    </div>`;
    
    
    document.querySelector(".information__item").innerHTML = /*html*/`
    <div class="company4">
    
        <h3>ceo</h3>
        <p> ${plusInfo.ceo} </p>
        <h3>cto</h3>
        <p> ${plusInfo.cto} </p>
        <h3>coo</h3>
        <p> ${plusInfo.coo} </p>
        <h3>cto_propulsion</h3>
        <p> ${plusInfo.cto_propulsion} </p>
        <h3>valuation</h3>
        <p> ${plusInfo.valuation} </p>
        <h3>summary</h3>
        <p> ${plusInfo.summary} </p>
        <h3>id</h3>
        <p> ${plusInfo.id} </p>
    
    </div>
    `;
    
    }
    
    
    
    
    
        
    
    