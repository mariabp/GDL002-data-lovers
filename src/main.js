'use strict';

const pokemonObj = POKEMON.pokemon;
//---------------------------------------------------------------------
let pokemonList = [];
// eslint-disable-next-line no-unused-vars
let pokemonInfo = "";
//---------------------------------------------------------------------
let condition = document.querySelector('select');
//---------------------------------------------------------------------
const homeScreen = document.querySelector('#homescreen');
const aboutUsScreen = document.querySelector('#aboutusscreen');
//---------------------------------------------------------------------
//---------------------------------------------------------------------
const searchInput = document.querySelector('#searchbar');
const searchButton = document.querySelector('#searchbutton');
const sortButton = document.querySelector('#sortbutton');
const sortDescentButton = document.querySelector('#sortdescentbutton');
const showAllButton = document.querySelector('#showall');
const resetButton = document.querySelector('#resetbutton');
const results = document.querySelector('#results');
//---------------------------------------------------------------------
const aboutUsButton = document.querySelector('#aboutusbutton');
//---------------------------------------------------------------------
const homeButton = document.querySelector('#homebutton');
const welcomeMessage = document.querySelector('#welcomemessage');
const infoButton = document.querySelector('#infobutton');
const statisticsScreen = document.querySelector('#statistics');





//Funcion para validar el texto que ingreso el usuario
const validateSearchInput = () => {

    if (searchInput.value.length < 1) {
        searchInput.placeholder = "Busca por nombre o número...";
        warnAndReset();
    } else if (/[^a-z0-9]/i.test(searchInput.value)) {
        searchInput.placeholder = "Solo puedes utilizar letras y/o números...";
        warnAndReset();
    } else if (searchInput.value < 1 || searchInput.value > 151) {
        searchInput.placeholder = "Solo existen 151 pokemon en Kanto";
        warnAndReset();
    } else {
        searchInput.style.backgroundColor = "rgb(139, 196, 122)";
        results.innerHTML = "";
        searchPokemon();
    }

};

//Funcion que cambia de color el campo donde el usuario ingresa su busqueda,resetea valor de busqueda del usuario a vacio y esconde el contenedor de resultados */
const warnAndReset = () => {

    searchInput.style.backgroundColor =  "rgb(212, 110, 110)";
    searchInput.value = "";
    results.style.display = "none";

};

//Funcion para borrar campos
const resetForm = () => {

    searchInput.value = "";
    searchInput.placeholder = "Busca por nombre o número";
    pokemonList = [];
    results.innerHTML = "";
    searchInput.style.background = "rgb(120, 166, 223)";
    condition.value = "Filtrarpor";

};

//Funcion para eliminar object object.
const noUndefinedOrNull = (element) => {

    let propertyIds = ["type", "height", "weight", "candy", "candy_count", "egg", "spawn_chance", "avg_spawns", "spawn_time", "multipliers", "weaknesses", "prev_evolution", "next_evolution"];

    for (let i = 0; i < propertyIds.length; i++) {

        if (element[`${propertyIds[i]}`] === undefined || element[`${propertyIds[i]}`] === null) {

            element[`${propertyIds[i]}`] = "--";

        } else if (Array.isArray(element[`${propertyIds[i]}`])) {

            element[`${propertyIds[i]}`].forEach((subelement) => {

                if (typeof(subelement) === "object") {

                    let objectContent = Object.entries(subelement);
                    element[`${propertyIds[i]}`] = objectContent[1][1];

                }

            });

        }

    }

};

//Funcion para mostrar en placeholder la cantidad de resultados
const colorBgAndShow = () => {

    if (pokemonList.length === 0 ) {
        searchInput.style.background = "rgb(196, 191, 122)";
        searchInput.placeholder = `[ 0 RESULTADOS ]`;
    } else if (pokemonList.length === 1 ) {
        searchInput.style.background = "rgb(123, 134, 228)";
        searchInput.placeholder = `[ ${pokemonList.length} RESULTADO ]`;
    } else {
        searchInput.style.background = "rgb(123, 134, 228)";
        searchInput.placeholder = `[ ${pokemonList.length} RESULTADOS ]`;
    }

    searchInput.value = "";
    condition.value = "Filtrarpor";
    results.style.display = "block";

};

//Funcion para mostrar la informacion de pokemon
const pokemonInfoLayout = (givenPokemonList) => {

    results.innerHTML = "";
	
	givenPokemonList.forEach((element) => {

		noUndefinedOrNull(element);

		const showSecondaryInfo = () => {

			if (secondaryInfoId.style.display === 'grid') {
				secondaryInfoId.style.display = 'none';
			} else {
				secondaryInfoId.style.display = 'grid';
			}

		};

		let pokemonInfoId = document.createElement('div');
		pokemonInfoId.setAttribute('id', `pokemoninfoid${element.id}`);
		pokemonInfoId.setAttribute('class', 'pokemoninfo');

		let primaryInfoId = document.createElement('div');
		primaryInfoId.setAttribute('id', 'primaryinfoid');
		primaryInfoId.setAttribute('class', 'primaryinfolayout');

		let pokemonImg = document.createElement('img');
		pokemonImg.setAttribute('id', 'pokemonimg');
		pokemonImg.setAttribute('src', `img/${element.num}.png`);

		let pokemonId = document.createElement('div');
		pokemonId.setAttribute('id', 'pokemonid');
		pokemonId.innerHTML = element.id;

		let pokemonName = document.createElement('div');
		pokemonName.setAttribute('id', 'pokemonname');
		pokemonName.innerHTML = element.name;

		primaryInfoId.appendChild(pokemonImg);
		primaryInfoId.appendChild(pokemonId);
		primaryInfoId.appendChild(pokemonName);

		let secondaryInfoId = document.createElement('div');
		secondaryInfoId.setAttribute('id', 'secondaryinfoid');
		secondaryInfoId.setAttribute('class', 'secondaryinfolayout');

		let pokemonType = document.createElement('div');
		pokemonType.setAttribute('id', 'pokemontype');
		pokemonType.setAttribute('class', 'secondaryinfostyle');
		pokemonType.innerHTML = `<div class='property'>Type: </div>${element.type}`;

		let pokemonHeight = document.createElement('div');
		pokemonHeight.setAttribute('id', 'pokemonheight');
		pokemonHeight.setAttribute('class', 'secondaryinfostyle');
		pokemonHeight.innerHTML = `<div class='property'>Height: </div>${element.height}</div>`;

		let pokemonWeight = document.createElement('div');
		pokemonWeight.setAttribute('id', 'pokemonweight');
		pokemonWeight.setAttribute('class', 'secondaryinfostyle');
		pokemonWeight.innerHTML = `<div class='property'>Weight: </div>${element.weight}</div>`;

		let pokemonCandy = document.createElement('div');
		pokemonCandy.setAttribute('id', 'pokemoncandy');
		pokemonCandy.setAttribute('class', 'secondaryinfostyle');
		pokemonCandy.innerHTML = `<div class='property'>Candy: </div>${element.candy}</div>`;

		let pokemonCandyCount = document.createElement('div');
		pokemonCandyCount.setAttribute('id', 'pokemoncandycount');
		pokemonCandyCount.setAttribute('class', 'secondaryinfostyle');
		pokemonCandyCount.innerHTML = `<div class='property'>Candy Count: </div>${element.candy_count}</div>`;

		let pokemonEgg = document.createElement('div');
		pokemonEgg.setAttribute('id', 'pokemonegg');
		pokemonEgg.setAttribute('class', 'secondaryinfostyle');
		pokemonEgg.innerHTML = `<div class='property'>Egg: </div>${element.egg}</div>`;

		let pokemonSpawnChance = document.createElement('div');
		pokemonSpawnChance.setAttribute('id', 'pokemonspawnchance');
		pokemonSpawnChance.setAttribute('class', 'secondaryinfostyle');
		pokemonSpawnChance.innerHTML = `<div class='property'>Spawn Chance: </div>${element.spawn_chance}</div>`;

		let pokemonAvgSpawns = document.createElement('div');
		pokemonAvgSpawns.setAttribute('id', 'pokemonavgspawns');
		pokemonAvgSpawns.setAttribute('class', 'secondaryinfostyle');
		pokemonAvgSpawns.innerHTML = `<div class='property'>Average Spawns: </div>${element.avg_spawns}</div>`;

		let pokemonSpawnTime = document.createElement('div');
		pokemonSpawnTime.setAttribute('id', 'pokemonspawntime');
		pokemonSpawnTime.setAttribute('class', 'secondaryinfostyle');
		pokemonSpawnTime.innerHTML = `<div class='property'>Spawn Time: </div>${element.spawn_time}</div>`;

		let pokemonMultipliers = document.createElement('div');
		pokemonMultipliers.setAttribute('id', 'pokemonmultipliers');
		pokemonMultipliers.setAttribute('class', 'secondaryinfostyle');
		pokemonMultipliers.innerHTML = `<div class='property'>Multipliers: </div>${element.multipliers}</div>`;

		let pokemonWeaknesses = document.createElement('div');
		pokemonWeaknesses.setAttribute('id', 'pokemonweaknesses');
		pokemonWeaknesses.setAttribute('class', 'secondaryinfostyle');
		pokemonWeaknesses.innerHTML = `<div class='property'>Weaknesses: </div>${element.weaknesses}</div>`;

		let pokemonPrevEvolution = document.createElement('div');
		pokemonPrevEvolution.setAttribute('id', 'pokemonprevevolution');
		pokemonPrevEvolution.setAttribute('class', 'secondaryinfostyle');
		pokemonPrevEvolution.innerHTML = `<div class='property'>Previous Evolution: </div>${element.prev_evolution}</div>`;

		let pokemonNextEvolution = document.createElement('div');
		pokemonNextEvolution.setAttribute('id', 'pokemonnextevolution');
		pokemonNextEvolution.setAttribute('class', 'secondaryinfostyle');
		pokemonNextEvolution.innerHTML = `<div class='property'>Next Evolution: </div>${element.next_evolution}</div>`;

		secondaryInfoId.appendChild(pokemonType);
		secondaryInfoId.appendChild(pokemonHeight);
		secondaryInfoId.appendChild(pokemonWeight);
		secondaryInfoId.appendChild(pokemonCandy);
		secondaryInfoId.appendChild(pokemonCandyCount);
		secondaryInfoId.appendChild(pokemonEgg);
		secondaryInfoId.appendChild(pokemonSpawnChance);
		secondaryInfoId.appendChild(pokemonAvgSpawns);
		secondaryInfoId.appendChild(pokemonSpawnTime);
		secondaryInfoId.appendChild(pokemonMultipliers);
		secondaryInfoId.appendChild(pokemonWeaknesses);
		secondaryInfoId.appendChild(pokemonPrevEvolution);
		secondaryInfoId.appendChild(pokemonNextEvolution);

		pokemonInfoId.appendChild(primaryInfoId);
		pokemonInfoId.appendChild(secondaryInfoId);

		results.appendChild(pokemonInfoId);

		primaryInfoId.addEventListener('click', showSecondaryInfo);

	});

    colorBgAndShow();

};

//Funcion que obtiene la información de 1 pokemon buscado.
const searchPokemon = () => {

    pokemonList = [];

    let searchedPokemon = searchInput.value.toLowerCase();

    pokemonObj.forEach((element) => {

        if (element.name.toLowerCase().includes(`${searchedPokemon}`) || element.id === parseInt(searchedPokemon)) {
            pokemonList.push(element);
        }

    });

    pokemonInfoLayout(pokemonList);

};

//Funcion que obtiene e imprime una lista todos los pokemon
const getAllPokemon = () => {

    pokemonList = [];

    pokemonObj.forEach((element) => {
        pokemonList.push(element);
    });

    pokemonInfoLayout(pokemonList);
    
};

//Funcion para imprimir la lista por orden alfabético
const printSortedList = () => {
    
    pokemonInfoLayout(kantodex.sortData(pokemonList));

};

const printSortedDescentList = () => {

    pokemonInfoLayout(kantodex.sortDataDescent(pokemonList));       

};

//Funcion para imprimir lista de Pokemon filtrados
const printFilteredPokemon = () => {

    if (pokemonList.length === 0) {
        pokemonList = pokemonObj;
    }

    pokemonList = kantodex.filterData(pokemonList, condition.value);

    pokemonInfoLayout(pokemonList);

};

//Funcion para mostrar About Kanto Dex
const showAboutUs = () => {

    statisticsScreen.style.display = 'none';
    homeScreen.style.display = 'none';
    welcomeMessage.style.display = 'none';
    aboutUsScreen.style.display = 'grid';
    homeButton.style.display = 'flex';
    infoButton.style.display = 'none';

};

//Funcion para regresar a Home
const home = () => {
    homeScreen.style.display = 'grid';
    welcomeMessage.style.display = 'flex';
    infoButton.style.display = 'flex';
    homeButton.style.display = 'none';
    aboutUsScreen.style.display = 'none';
    statisticsScreen.style.display = 'none';
    resetForm();

};

//Funcion para mostrar pantalla statistics
const showStatistics = () => {

    homeScreen.style.display = 'none';
    homeButton.style.display = 'flex';
    statisticsScreen.style.display = 'grid';
    welcomeMessage.style.display = 'none';
    infoButton.style.display = 'none';

};



//Botones

aboutUsButton.addEventListener('click', showAboutUs);
showAllButton.addEventListener('click', getAllPokemon);
searchButton.addEventListener('click', validateSearchInput);
condition.addEventListener('change', printFilteredPokemon);
resetButton.addEventListener('click', resetForm);
sortButton.addEventListener('click', printSortedList);
sortDescentButton.addEventListener('click', printSortedDescentList);
homeButton.addEventListener('click', home);
infoButton.addEventListener('click', showStatistics);