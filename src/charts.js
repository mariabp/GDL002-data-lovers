let pokemonData = POKEMON.pokemon;

const typeChart = document.getElementById('typechart');

//let typeChart = document.getElementById('typechart');

const calculateAllPokemonTypes = pokemons => {
  const allTheTypes = [];
  pokemons.forEach(pokemon => {
    allTheTypes.push(...pokemon.type);
  });
  return allTheTypes;
};

const calculatePokemonTypes = pokemons => {
  const allTheTypes = calculateAllPokemonTypes(pokemons);
  const notRepeatedTypes = [];

  allTheTypes.forEach(type => {
    if (!notRepeatedTypes.includes(type)) {
      notRepeatedTypes.push(type);
    }
  });

  return notRepeatedTypes;
};

const getRandomNumber = top => {
  return Math.floor(Math.random() * top);
};

const rgbGenerator = () => {
  return `rgb(${getRandomNumber(255)},${getRandomNumber(255)},${getRandomNumber(255)})`;
};

const calculateBackground = () => {
  const typeCount = calculatePokemonTypes(pokemonData).length;
  return [...Array(typeCount)].map(() => {
    return rgbGenerator();
  });
};

const pokemonByTypeCount = pokemons => {
  const allTheTypes = calculateAllPokemonTypes(pokemons);
  const pokemonTypes = calculatePokemonTypes(pokemons);

  // return pokemonTypes.map(pokemonType => {
  //   let toReturn = _.countBy(allTheTypes, element => element === pokemonType).true;
  //   console.log('toReturn', toReturn);
  //   return toReturn;
  // });

  return pokemonTypes.map(pokemonType => {
    const countObject = allTheTypes.reduce((prev, current) => {
      prev[current] = (prev[current] || 0) + 1;
      return prev;
    }, {});
    return countObject[pokemonType];
  });
};



calculatePokemonTypes(pokemonData).forEach((element) => {

    let heightsArray = [];

    let heightSum = 0;

    window.kantodex.filterData(pokemonData, element).forEach((subelement) => {

        heightsArray.push(subelement.height);

    });

    heightsArray.forEach((height) => {

        heightSum += parseFloat(height);

    });

    let heightAverage = heightSum / parseFloat(heightsArray.length);

    let typeHeightAverageStructure = {type: element, AverageHeight: heightAverage.toFixed(2)};

    let typeHeightAverage = [];

    typeHeightAverage.push(typeHeightAverageStructure);

});



//Gráfica

const configObject = {
  type: 'bar',
  data: {
    labels: calculatePokemonTypes(pokemonData),
    datasets: [
      {
        label: 'Tipos de Pokemon',
        backgroundColor: calculateBackground(),
        borderWidth: 0,
        data: pokemonByTypeCount(pokemonData),
      },

      {
        label: 'Tamaño promedio por tipo',
        backgroundColor: calculateBackground(),
        borderWidth: 0,
        data: [1.02, 1.15, 1.22, 1.62, 1.24, 0.90, 0.89, 0.85, 1.51, 1.20, 1.26, 1.77, 1.76, 1.47,2.67]
      },
    ],
  },

  options: {
    responsive: true,
    maintainAspectRatio: true,
    animation: {
      animateRotate: true,
      animateScale: true,
    },

    legend: {
      display: true,
      position: 'bottom',
      labels: {
        fontFamily: 'Dosis',
        fontSize: 16,
        fontColor: 'rgb(255, 255, 255)',
      },
    },

    scales: {

      scaleLabel: {
        display: false,
      },

      yAxes: [{
        ticks: {
            beginAtZero: true
        }
    }]
    },
  },
};


const byTypeChart = () => {
    // eslint-disable-next-line no-undef
    new Chart(typeChart, configObject);
};

byTypeChart();