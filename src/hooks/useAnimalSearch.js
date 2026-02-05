import { useState, useEffect } from "react";
import FetchData from "../service/FetchData";

export function useAnimalSearch() {

    const [animals, setAnimals] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [triggerFetch, setTriggerFetch] = useState(false);    

    useEffect(() => {
        if (!triggerFetch) return;

        setLoading(true);
        setError(null);

        FetchData(searchTerm)
        .then((data) => {
            setAnimals(data);
        })
        .catch((error) => {
            setError(error.message);
        })
        .finally(()=> {
            setLoading(false);
            setTriggerFetch(false);
        });

    }, [triggerFetch]);

    return{
        data: animals,
        loading,
        error,
        setSearchTerm,
        triggerSearch: () => setTriggerFetch(true)
    };
}

export default useAnimalSearch;