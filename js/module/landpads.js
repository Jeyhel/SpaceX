

export const getLandpadsAllId = async () => {
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

    let res = await fetch("https://api.spacexdata.com/v4/landpads/query", config);
    const { docs } = await res.json();
    console.log(docs);
    return docs;
}



export const getInfoLandpads = async (id) => {
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

    let res = await fetch ("https://api.spacexdata.com/v4/landpads/query", config);
    const { docs } = await res.json();
    console.log(docs[0]);
    return docs[0];
}

