

export const getShipsAllId = async () => {
    const config = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "query": {},
            "options": {
                "select": "id"
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/ships/query", config);
    const { docs } = await res.json();
    console.log(docs);
    return docs;
}

export const getInfoShips = async (id) => {
    const config = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "query": {
                "_id": id
            },
            "options": {
                "populate": ['launches']
            }
        })
    };

    let res = await fetch ("https://api.spacexdata.com/v4/ships/query", config);
    const { docs } = await res.json();
    console.log(docs[0]);
    return docs[0];
}

