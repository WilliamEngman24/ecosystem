
async function FetchData(animalName) {

    const baseURL = 'https://api.api-ninjas.com/v1/animals';

    const apiKey = "eoSJvRbe5an0HtFWXHkKgYbAw0Yq2DzGIIUUE1uH";
    
    const res = await fetch(`${baseURL}?name=${encodeURIComponent(animalName)}`, {
        headers: {
            'X-Api-Key': apiKey,
        },
    });

    if(!res.ok){
        throw new Error("Request failed with status " + res.status)
    }

    return res.json();
}

export default FetchData
