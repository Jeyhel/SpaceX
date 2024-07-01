


export const clearInformation = () => {
    document.querySelector("#header__title").innerHTML = "";
    document.querySelector(".description__item").innerHTML = "";
    document.querySelector(".section__information__1").innerHTML = "";
    //document.querySelector(".information__table__1").innerHTML = "";
    document.querySelector(".section__information__2")
    //document.querySelector("#country_rocket").innerHTML = "";
    document.querySelector("#sucess_rate_rocket").innerHTML = "";
    document.querySelector(".information__table__2").innerHTML = "";
    document.querySelector(".section__image").innerHTML = "";
    document.querySelector(".information__item").innerHTML = "";
    document.querySelector("#pagination").innerHTML = "";
    
   

  

    const elementsToResetClasses = [
        "#header__title",
        "#description__item",
        // ".section__information__1",
        // ".information__table__1",
        "#country_rocket",
        "#sucess_rate_rocket",
        ".information__item",
        // ".information__table__2",
        ".section__image",
        "#pagination",
        ".pagination"
    ];

    elementsToResetClasses.forEach(selector => {
        const element = document.querySelector(selector);
        if (element) {
            element.className = selector.slice(1); 
        }
    });
}

