export const getAllRockets = async () => {

    const url = ("https://api.spacexdata.com/v4/rockets");
    const custom = { method: "GET" };

    let res = await fetch(url, custom);
    let data = await res.json();
    return data;
}

export const getAllRocketsId = async (id)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/rockets/${id}`)
    let data = await res.json();
    return data;
}