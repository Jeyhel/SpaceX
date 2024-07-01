

export const getLaunchesAllId = async () => {
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

    let res = await fetch("https://api.spacexdata.com/v4/launches/query", config);
    const { docs } = await res.json();
    console.log(docs);
    return docs;
}

export const getInfoLaunches = async (id) => {
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
            }
        })
    };

    let res = await fetch ("https://api.spacexdata.com/v4/launches/query", config);
    const { docs } = await res.json();
    console.log(docs[0]);
    return docs[0];
}

