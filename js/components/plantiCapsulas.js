export const InfoCapsules = async (info) => {
    console.log(info);

    document.querySelector("#header__title").innerHTML = info.serial;

    let launches = info.launches;
    let time = 0;

    launches.forEach(() => {
        time += 1;
    })

    console.log(time);};