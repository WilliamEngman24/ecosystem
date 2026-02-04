import EcosystemEvaluation from "../service/EcosystemEvaluation";

import { useEffect, useState } from "react";

export function useEvaluation(carnivores, herbivores) {
    const [ecoStatus, setEcoStatus] = useState(null);
    const [ecoProblems, setEcoProblems] = useState([]);

    useEffect (() => {
        const result = EcosystemEvaluation(carnivores, herbivores);

        setEcoStatus(result.status);
        setEcoProblems(result.problems);
    }, [carnivores, herbivores])

    return {ecoStatus, ecoProblems};
}

export default useEvaluation