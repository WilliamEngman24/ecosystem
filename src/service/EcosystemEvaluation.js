export function EcosystemEvaluation(carnivores, herbivores) {

    if(carnivores.length === 0 && herbivores.length === 0) {
      return{ status: null, problems: [] };
    }

    const problems = [];

    carnivores.forEach(carnivore => {

      const prey = carnivore.characteristics?.prey ??
      carnivore.characteristics?.main_prey;

      if(!prey) return;

      //converts string into an array
      const preyList = prey.split(",").map(p => p.trim());

      const preyExists = preyList.some(preyName =>
        herbivores.some(herb => {
          const herbName = herb.name.toLowerCase();
          const preyLower = preyName.toLowerCase();

          return herbName.includes(preyLower) || preyLower.includes(herbName);
        })
      );

      if(!preyExists) {
        problems.push(`${carnivore.name} has the missing prey: ${prey}`);
      }

    });

    herbivores.forEach(herbivore => {

      const preditors = herbivore.characteristics?.predators

      if(!preditors) return;

      //converts string into an array
      const predatorList = preditors.split(",").map(p => p.trim());

      const predatorExists = predatorList.some(predatorName =>
        carnivores.some(carno => {
          const carnoName = carno.name.toLowerCase();
          const predatorLower = predatorName.toLowerCase();

          return carnoName.includes(predatorLower) || predatorLower.includes(carnoName);
        })
      );

      if(!predatorExists) {
        problems.push(`${herbivore.name} has the missing predators: ${preditors}`);
      }

    });

    return {
      status: problems.length === 0,
      problems
    };
}

export default EcosystemEvaluation