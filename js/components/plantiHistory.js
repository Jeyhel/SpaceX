

export const InfoHistory = async (plusInfo) => {

        
    document.querySelector("#header__title").innerHTML = plusInfo.title;
    
    document.querySelector(".section__information__2").innerHTML = /*html*/`
    <div class="history1">

    <a href ="${plusInfo.links.article}">
    <p> Clik here...</p>
    </a>
    
    </div>`;

    document.querySelector(".sucess_rate_rocket").innerHTML = /*html*/`
    <div class="history2">
    

        <h3>event date utc</h3>
        <p> ${plusInfo.event_date_utc} </p>
        <br>
    
        <h3>event date unix</h3>
        <p> ${plusInfo.event_date_unix} </p>
        <br>
        <h3>details</h3>
        <p> ${plusInfo.details} </p>
        <br>
        <h3>id</h3>
        <p> ${plusInfo.id} </p>
        <br>
    
    </div>`;
    
    
    
  
    
    }
    
    
    
    
    
        
    
    