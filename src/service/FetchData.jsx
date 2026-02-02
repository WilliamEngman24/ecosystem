import React from 'react'

function FetchData(animalName, setPosts, setLoading, setError) {

    const baseURL = 'https://api.api-ninjas.com/v1/animals';

    const apiKey = "eoSJvRbe5an0HtFWXHkKgYbAw0Yq2DzGIIUUE1uH";

    setLoading(true);
    
    fetch(`${baseURL}?name=${encodeURIComponent(animalName)}`, {
            headers: {
                'X-Api-Key': apiKey,
            },
        }
    )
    .then((res) => {
        if(!res.ok){
            throw new Error("Request failed with status " + res.status)
        }
        return res.json();
    })

    .then((data) => {
        setPosts(data);
        setLoading(false);
    })

    .catch((err) =>{
        setError(err.message);
        setLoading(false);
    });
}

export default FetchData
