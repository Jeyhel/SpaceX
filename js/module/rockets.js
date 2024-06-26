export const getAllRockets = async () => {

    const url = ("https://api.spacexdata.com/v4/rockets");
    const custom = { method: "GET" };

    let res = await fetch(url, custom);
    let data = await res.json();
    return data;
}




export const getAllRocketsId = async () => {
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
    
    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    const { docs } = await res.json();
    // console.log(docs);
    return docs;
}

export const getOneNameRock  = async(id) =>{
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
                "select": "name"
            }
        })
    };
    
    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    const { docs } = await res.json();
    return docs.length > 0 ? docs[0].name : "Not found";
}

export const getRocketInfo = async(id) =>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            
            "query": {
                "_id": id
              },
                "options": {
                    "select": "description first_stage.reusable first_stage.engines first_stage.fuel_amount_tons first_stage.burn_time_sec second_stage.reusable second_stage.engines second_stage.fuel_amount_tons second_stage.burn_time_sec wikipedia"
              
                }
            })

        };
    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    const { docs } = await res.json();
    console.log(docs);
    return docs[0];
}

export const getRocketInfoCountry = async(id) =>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            
            "query": {
                "_id": id
 
            },
            "options": {
              "select": "country"
              
            }
          })
        }; 
    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    const { docs } = await res.json();
    console.log(docs);
    return docs[0];
}

export const getRocketInfoimages = async(id) =>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            
            "query": {
                "_id": id

            },
            "options": {
              "select": "flickr_images"
              
            }
          })
        }; 
    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    const { docs } = await res.json();
    console.log(docs);
    return docs[0];
}


export const getRocketInfocircle1 = async(id) =>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            
            "query": {
                "_id": id
             
              },
              "options": {
                "select": "height.meters height.feet diameter.meters diameter.feet"
            
              }
          })
        }; 
    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    const { docs } = await res.json();
    console.log(docs);
    return docs[0];
}
export const getRocketInfocircle3 = async(id) =>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            
            "query": {
                "_id": id
             
              },
              "options": {
                "options": {
                    "select": "mass.kg mass.lb"
              
                  }
               }
            })
            };
             
    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    const { docs } = await res.json();
    console.log(docs);
    return docs[0];
}




export const getRocketInfoDownIzq = async(id) =>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            
            "query": {
                "_id": id
             
            },
            "options": {
                "select": "engines.type engines.version  engines.layout   engines.propellant_1   engines.propellant_2 engines.thrust_to_weight"
              
              }
            })
          }; 
        
    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    const { docs } = await res.json();
    console.log(docs);
    return docs[0];
}

export const getRocketInfoDownDer = async(id) =>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            
            "query": {
                "_id": id
             
            },
            "options": {
                "select": "engines.isp isp.sea_level isp.vacuum engines.thrust_sea_level thrust_sea_level.kN thrust_sea_level.lbf engines.thrust_vacuum  thrust_vacuum.kN thrust_vacuum.lbf"
                
              }
            })
        };
            
    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    const { docs } = await res.json();
    console.log(docs);
    return docs[0];
}



export const getRocketInfoLines = async(id) =>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            
            "query": {
                "_id": id
             
            },
            "options": {
                "select": "second_stage.thrust.kN second_stage.thrust.lbf second_stage.payloads.composite_fairing.height height.meters height.feet second_stage.composite_fairing.diameter diameter.meters diameter.feet second_stage.payloads.option_1"
                }
                
              })
            }; 
        
    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    const { docs } = await res.json();
    console.log(docs);
    return docs[0];
}








