

export const InfoLandpads = async (plusInfo) => {
    console.log('data jeje', plusInfo)

    const launches = plusInfo.launches
    console.log('launches jeje', launches)
        
    document.querySelector("#header__title").innerHTML = plusInfo.full_name;
    document.querySelector(".nav__description").innerHTML = /*html*/`
    <div class="landpads1">
    
    <br>
    <h3>Details</h3>
    <hr>
    <hr>
    <p> ${plusInfo.details} </p>
    <br>
    </div>
    `;

    document.querySelector(".section__information__2").innerHTML = /*html*/`
    <div class="landpads2">
    
    
    
    <h3>Name</h3>
    <p> ${plusInfo.name} </p>
    
    <hr>
    <h3>Type</h3>
    <p> ${plusInfo.type} </p>
    
    <hr>
    <h3>Locality</h3>
    <p> ${plusInfo.locality} </p>
    
    <hr>
    <h3>Region</h3>
        <p> ${plusInfo.region} </p>
        <br>
        
        </div>`;
    
    
    
    document.querySelector(".sucess_rate_rocket").innerHTML = /*html*/`
    <div class="landpads3">
    <h3>Landing successes</h3>
    <p> ${plusInfo.landing_successes} </p>
    <hr>
    
    <h3>Landing attempts</h3>
    <p> ${plusInfo.landing_attempts} </p>
    <hr>
    <h3>Longitude</h3>
    <p> ${plusInfo.longitude} </p>
    <hr>
    <h3>Latitude</h3>
        <p> ${plusInfo.latitude} </p>
        <br>
        </div>`;


           document.querySelector(".section__image").innerHTML = /*html*/`
            <div class="landpads6"> 
        <img src="${plusInfo.images.large}"referrerpolicy="no-referrer" width=300px heigth=350px>
    </div> 
    `;
    
    const land = document.getElementById('information__2')
    let landpadsHTML = '';
    launches.forEach(element => {
        landpadsHTML += `
        <p>${element.name}</p>
        `;
    });

    console.log('elemento', landpadsHTML)
    
    land.innerHTML = `
    <div class="landpads4">
    <br>
    <h3>Launches</h3>
    <hr>
    ${landpadsHTML}
    <br>
        </div>
        `;
}

document.querySelector(".information__item").innerHTML = landpads
    
    
    
    
        
    
    