'use strict';

const pokemonObj = POKEMON.pokemon;

let pokemonList = [];
let pokemonInfo = "";

let condition = document.querySelector('select');

const homeScreen = document.querySelector('#homescreen');
const aboutUsScreen = document.querySelector('#aboutusscreen');

//const description = document.querySelector('h1');
const searchInput = document.querySelector('#searchbar');
const searchButton = document.querySelector('#searchbutton');
const filterButton = document.querySelector('#filterbutton');
const sortButton = document.querySelector('#sortbutton');
const sortDescentButton = document.querySelector('#sortdescentbutton');
const showAllButton = document.querySelector('#showall');
const resetButton = document.querySelector('#resetbutton');
const results = document.querySelector('#results');
//const footer = document.querySelector('footer');
const aboutUsButton = document.querySelector('#aboutusbutton');
//const aboutUs = document.querySelector('p');
//const searchBox = document.querySelector('#search');
//const showAndResetBox = document.querySelector('#showandreset');
//const filterBox = document.querySelector('#filter');
const homeButton = document.querySelector('#homebutton');
const welcomeMessage = document.querySelector('#welcomemessage');
const infoButton = document.querySelector('#infobutton');
const statisticsScreen = document.querySelector('#statistics');
//const descriptionDemographics = document.querySelector('#descriptiondemographics');
const computeType = document.querySelector('#computetype');
const calculateButton = document.querySelector('#calculatebutton');
const computedResults = document.querySelector('#computedresults');
const selectType = document.querySelector('selecttype');


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

const pokemonInfoLayout = (givenPokemonList) => {

	results.innerHTML = "";

	let secondaryInfoId = 1;

	const showSecondaryInfo = () => {

		let pokemonInfoDiv = event.currentTarget;
		let clickedElement = pokemonInfoDiv.querySelector("[id^='secondaryinfoid']");
		clickedElement.style.display = "grid";

	};
	
	givenPokemonList.forEach((element) => {

		pokemonInfo = `
			<div id="identifier${element.id}" class="pokemoninfo">
				<div class="primaryinfolayout">
					<div id="pokemonid">${element.id}</div>
					<div id="pokemonname">${element.name}</div>
					<img id="pokemonimg" src="${element.img}">
				</div>
				<div id="secondaryinfoid${secondaryInfoId}" class="secondaryinfolayout">
					<div id="pokemontype" class="secondaryinfostyle"><div class="property">Type: </div>${element.type}</div>
					<div id="pokemonheight" class="secondaryinfostyle"><div class="property">Height: </div>${element.height}</div>
					<div id="pokemonweight" class="secondaryinfostyle"><div class="property">Weight: </div>${element.weight}</div>
					<div id="pokemoncandy" class="secondaryinfostyle"><div class="property">Candy: </div>${element.candy}</div>
					<div id="pokemoncandycount" class="secondaryinfostyle"><div class="property">Candy Count: </div>${element.candy_count}</div>
					<div id="pokemonegg" class="secondaryinfostyle"><div class="property">Egg: </div>${element.egg}</div>
					<div id="pokemonspawnchance" class="secondaryinfostyle"><div class="property">Spawn Chance: </div>${element.spawn_chance}</div>
					<div id="pokemonavgspawns" class="secondaryinfostyle"><div class="property">Average Spawns: </div>${element.avg_spawns}</div>
					<div id="pokemonspawntime" class="secondaryinfostyle"><div class="property">Spawn Time: </div>${element.spawn_time}</div>
					<div id="pokemonmultipliers" class="secondaryinfostyle"><div class="property">Multipliers: </div>${element.multipliers}</div>
					<div id="pokemonweaknesses" class="secondaryinfostyle"><div class="property">Weaknesses: </div>${element.weaknesses}</div>
					<div id="pokemonprevevolution" class="secondaryinfostyle"><div class="property">Previous Evolution: </div>${element.next_evolution}</div>
					<div id="pokemonnextevolution" class="secondaryinfostyle"><div class="property">Next Evolution: </div>${element.next_evolution}</div>
				</div>
				
			</div>`
		;

		secondaryInfoId++;
		results.innerHTML += pokemonInfo;
		
	});


	let pokemonInfoDisplayIds = document.querySelectorAll("[id^='identifier']");

	pokemonInfoDisplayIds.forEach((element) => {
		element.addEventListener('click', showSecondaryInfo);
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

//
const showStatistics = () => {

	homeScreen.style.display = 'none';
	homeButton.style.display = 'flex';
	statisticsScreen.style.display = 'grid';
	welcomeMessage.style.display = 'none';
	infoButton.style.display = 'none';

};

const getCalculations = () => {

	if (computeType.value === "weight") {
		computedResults.innerHTML = "El peso promedio de los pokemon en Kanto es de " + kantodex.computeStats(pokemonObj, computeType.value) + " kg.";
	} else  {
		computedResults.innerHTML = "La altura promedio de los pokemon en Kanto es de " + kantodex.computeStats(pokemonObj, computeType.value) + " metros.";
	}
};


//Botones

aboutUsButton.addEventListener('click', showAboutUs);
showAllButton.addEventListener('click', getAllPokemon);
searchButton.addEventListener('click', validateSearchInput);
filterButton.addEventListener('click', printFilteredPokemon);
resetButton.addEventListener('click', resetForm);
sortButton.addEventListener('click', printSortedList);
sortDescentButton.addEventListener('click', printSortedDescentList);
homeButton.addEventListener('click', home);
infoButton.addEventListener('click', showStatistics);
calculateButton.addEventListener('click', getCalculations);