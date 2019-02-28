require('../src/data.js');

const pokemon = require('../src/data/pokemon/pokemon.json');
const pokemonObj = pokemon.pokemon;

describe('filterData', () => {
  it('should be a function', () => {
   expect(typeof(kantodex.filterData)).toBe('function');
  });

  it('debería devolver Gastly,Haunter,Gengar, para tipo Ghost', () => {
    expect(window.kantodex.filterData(pokemonObj,'Ghost')).toEqual([{
      "id": 92,
      "num": "092",
      "name": "Gastly",
      "img": "http://www.serebii.net/pokemongo/pokemon/092.png",
      "type": [
        "Ghost",
        "Poison"
      ],
      "height": "1.30 m",
      "weight": "0.1 kg",
      "candy": "Gastly Candy",
      "candy_count": 25,
      "egg": "5 km",
      "spawn_chance": 0.79,
      "avg_spawns": 79,
      "spawn_time": "04:21",
      "multipliers": [1.78],
      "weaknesses": [
        "Ground",
        "Psychic",
        "Ghost",
        "Dark"
      ],
      "next_evolution": [{
        "num": "093",
        "name": "Haunter"
      }, {
        "num": "094",
        "name": "Gengar"
      }]
    }, {
      "id": 93,
      "num": "093",
      "name": "Haunter",
      "img": "http://www.serebii.net/pokemongo/pokemon/093.png",
      "type": [
        "Ghost",
        "Poison"
      ],
      "height": "1.60 m",
      "weight": "0.1 kg",
      "candy": "Gastly Candy",
      "candy_count": 100,
      "egg": "Not in Eggs",
      "spawn_chance": 0.052,
      "avg_spawns": 5.2,
      "spawn_time": "00:10",
      "multipliers": [
        1.56,
        1.8
      ],
      "weaknesses": [
        "Ground",
        "Psychic",
        "Ghost",
        "Dark"
      ],
      "prev_evolution": [{
        "num": "092",
        "name": "Gastly"
      }],
      "next_evolution": [{
        "num": "094",
        "name": "Gengar"
      }]
    }, {
      "id": 94,
      "num": "094",
      "name": "Gengar",
      "img": "http://www.serebii.net/pokemongo/pokemon/094.png",
      "type": [
        "Ghost",
        "Poison"
      ],
      "height": "1.50 m",
      "weight": "40.5 kg",
      "candy": "Gastly Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.0067,
      "avg_spawns": 0.67,
      "spawn_time": "03:55",
      "multipliers": null,
      "weaknesses": [
        "Ground",
        "Psychic",
        "Ghost",
        "Dark"
      ],
      "prev_evolution": [{
        "num": "092",
        "name": "Gastly"
      }, {
        "num": "093",
        "name": "Haunter"
      }]
    }]);
  });
});
describe('sortData', () => {
  it('should be a function', () => {
   expect(typeof(kantodex.sortData)).toBe('function');
  });
  it('Debería devolver Abra, Aerodactyl, Alacazam' () => {
    expect(window.kantodex.sortData(pokemonObj)).toEqual([{
      
        "id": 63,
        "num": "063",
        "name": "Abra",
        "img": "http://www.serebii.net/pokemongo/pokemon/063.png",
        "type": [
          "Psychic"
        ],
        "height": "0.89 m",
        "weight": "19.5 kg",
        "candy": "Abra Candy",
        "candy_count": 25,
        "egg": "5 km",
        "spawn_chance": 0.42,
        "avg_spawns": 42,
        "spawn_time": "04:30",
        "multipliers": [
          1.36,
          1.95
        ],
        "weaknesses": [
          "Bug",
          "Ghost",
          "Dark"
        ],
        "next_evolution": [{
          "num": "064",
          "name": "Kadabra"
        }, {
          "num": "065",
          "name": "Alakazam"
        }]
      },
      {
        "id": 142,
        "num": "142",
        "name": "Aerodactyl",
        "img": "http://www.serebii.net/pokemongo/pokemon/142.png",
        "type": [
          "Rock",
          "Flying"
        ],
        "height": "1.80 m",
        "weight": "59.0 kg",
        "candy": "None",
        "egg": "10 km",
        "spawn_chance": 0.018,
        "avg_spawns": 1.8,
        "spawn_time": "23:40",
        "multipliers": null,
        "weaknesses": [
          "Water",
          "Electric",
          "Ice",
          "Rock",
          "Steel"
        ]
      },
      {
        "id": 65,
        "num": "065",
        "name": "Alakazam",
        "img": "http://www.serebii.net/pokemongo/pokemon/065.png",
        "type": [
          "Psychic"
        ],
        "height": "1.50 m",
        "weight": "48.0 kg",
        "candy": "Abra Candy",
        "egg": "Not in Eggs",
        "spawn_chance": 0.0073,
        "avg_spawns": 0.73,
        "spawn_time": "12:33",
        "multipliers": null,
        "weaknesses": [
          "Bug",
          "Ghost",
          "Dark"
        ],
        "prev_evolution": [{
          "num": "063",
          "name": "Abra"
        }, {
          "num": "064",
          "name": "Kadabra"
        }]
      },
  
    }]);
  });
}); 


