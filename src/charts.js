var heightChart = document.getElementById("heightchart");

let lineHeightChart = new Chart(heightChart, {
    type: 'line',
    data: {

        labels:["Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie", 
                "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata", "Raticate",
                "Spearow", "Fearow", "Ekans", "Arbok", "Pikachu", "Raichu", "Sandshrew", "Sandslash", "Nidoran ♀ (Female)", "Nidorina",
                "Nidoqueen", "Nidoran ♂ (Male)", "Nidorino", "Nidoking", "Clefairy", "Clefable", "Vulpix", "Ninetales", "Jigglypuff", "Wigglytuff", 
                "Zubat", "Golbat", "Oddish", "Gloom", "Vileplume", "Paras", "Parasect", "Venonat", "Venomoth", "Diglett", 
                "Dugtrio", "Meowth", "Persian", "Psyduck", "Golduck", "Mankey", "Primeape", "Growlithe", "Arcanine", "Poliwag",
                "Poliwhirl", "Poliwrath", "Abra", "Kadabra", "Alakazam", "Machop", "Machoke", "Machamp", "Bellsprout", "Weepinbell", 
                "Victreebel", "Tentacool", "Tentacruel", "Geodude", "Graveler", "Golem", "Ponyta", "Rapidash", "Slowpoke", "Slowbro", 
                "Magnemite", "Magneton", "Farfetch'd", "Doduo", "Dodrio", "Seel", "Dewgong", "Grimer", "Muk", "Shellder", 
                "Cloyster", "Gastly", "Haunter", "Gengar", "Onix", "Drowzee", "Hypno", "Krabby", "Kingler", "Voltorb",
                "Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing",
                "Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie",
                "Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras",
                "Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops",
                "Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew"
             ],

        datasets: [
            {
                label: 'Altura de pokemones de la región Kanto',
                borderColor: "#d66e06",
                pointStyle: 'line',
                lineTension: 0,
                fill: false,
                data: [0.71,0.99,2.01,0.61,1.09,1.70,0.51,0.99,1.60,0.30,
                    0.71,1.09,0.30,0.61,0.99,0.30,1.09,1.50,0.30,0.71,
                    0.30,1.19,2.01,3.51,0.41,0.79,0.61,0.99,0.41,0.79,
                    1.30,0.51,0.89,1.40,0.61,1.30,0.61,1.09,0.51,0.99,
                    0.79,1.60,0.51,0.79,1.19,0.30,0.99,0.99,1.50,0.20,
                    0.71,0.41,0.99,0.79,1.70,0.51,0.99,0.71,1.91,0.61,
                    0.99,1.30,0.89,1.30,1.50,0.79,1.50,1.60,0.71,0.99,
                    1.70,0.89,1.60,0.41,0.99,1.40,0.99,1.70,1.19,1.60,
                    0.30,0.99,0.7,1.40,1.80,1.09,1.70,0.89,1.19,0.30,
                    1.50,1.30,1.60,1.50,8.79,0.99,1.60,0.41,1.30,0.51,
                    1.19,0.41,2.01,0.41,0.99,1.50,1.40,1.19,0.61,1.19,
                    0.99,1.91,1.09,0.99,2.21,0.41,1.19,0.61,1.30,0.79,
                    1.09,1.30,1.50,1.40,1.09,1.30,1.50,1.40,0.89,6.50,
                    2.49,0.30,0.30,0.99,0.79,0.89,0.79,0.41,0.99,0.51,
                    1.30,1.80,2.11,1.70,1.60,2.01,1.80,3.99,2.21,2.01,
                    0.41],
            },
            
            {
                label: 'Altura promedio',
                borderColor: "#ffd902",
                pointStyle: 'star',
                fill: true,
                data: [1.19]
            }
        ]

    },

    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }


});


