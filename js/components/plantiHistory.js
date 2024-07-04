

export const InfoHistory = async (plusInfo) => {

        
    document.querySelector("#header__title").innerHTML = plusInfo.title;
    
    document.querySelector(".section__information__2").innerHTML = /*html*/`
    <div class="history1">

    <h3> Do you want more information?</h3>
    <a href ="${plusInfo.links.article}">
    <br>   
    <p> Clik here</p>
    </a>
    <img id="fire" src="./storage/img/fire.jpg" alt=""> 

    </div>`;

    document.querySelector(".sucess_rate_rocket").innerHTML = /*html*/`
    <div class="history2">
    

        <h3>Event Date Utc</h3>
        <p> ${plusInfo.event_date_utc} </p>
        <br>
        <h3>Event Date Unix</h3>
        <p> ${plusInfo.event_date_unix} </p>
        <br>
        <h3>Details</h3>
        <p> ${plusInfo.details} </p>
        <br>
        <h3>ID</h3>
        <p> ${plusInfo.id} </p>
        <br>
    
    </div>`;
    
    
    
  
    
    }
    
    
    
    
    
        
    
    