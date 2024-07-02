
export const getInfoRoadster = async () => {
    const config = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const res = await fetch("https://api.spacexdata.com/v4/roadster", config);
    const data = await res.json();
    console.log('Company info:', data);
    return data;
}