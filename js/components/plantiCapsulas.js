export const InfoCapsules = async (info) => {
    console.log(info);

    document.querySelector("#header__title").innerHTML = info.serial;

    let launches = info.launches;
    let time = 0;

    launches.forEach(() => {
        time += 1;
    })

    console.log(time);};

    export const plusInfoCapsules = async (plusInfo) => {
        console.log(plusInfo);
    document.querySelector(".section__information__2").innerHTML = /*html*/`
    <div class="data">

        <h4>CAPSULE DATA</h4>
        <hr>
        <div class="data__item">
            <img src="./storage/img/barras.svg">
            <div class="data__item__text">
                <p>Serial</p>
                <p>${info.serial}</p>
            </div>
        </div>`;
    }; 