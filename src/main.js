'use strict';

const searchButton = document.querySelector('#searchbutton');
const showAllButton = document.querySelector('#showall');
const description = document.querySelector('h1');
const footer = document.querySelector('footer');
const results = document.querySelector('#results');
const pokemonObj = POKEMON.pokemon;
const searchInput = document.querySelector('#searchbar');
const aboutUsButton = document.querySelector('#aboutUsButton');
const resetButton = document.querySelector('#resetbutton');
const aboutUs = document.querySelector('p');
let condition = document.querySelector('select');
const filterButton = document.querySelector('#filterbutton');
let pokemonList = [];
const sortButton = document.querySelector('#sortbutton');

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

/*Funcion que cambia de color el campo donde el usuario ingresa su busqueda,resetea valor de busqueda del usuario a vacio y esconde el contenedor de resultados */
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

//Funcion que obtiene la información de 1 pokemon buscado.
const searchPokemon = () => {
	let searchedPokemon = searchInput.value.toLowerCase();
	pokemonObj.forEach((element) => {
		let pokemonInfo = `
			<div class="pokemoninfo">
			<div id="pokemonid">${element.id}</div>
			<div id="pokemonname">${element.name}</div>
			<img id="pokemonimg" src="${element.img}">
			<div id="pokemontype"><div class="property">Type: </div>${element.type}</div>
			<div id="pokemonheight"><div class="property">Height: </div>${element.height}</div>
			<div id="pokemonweight"><div class="property">Weight: </div>${element.weight}</div>
			<div id="pokemoncandy"><div class="property">Candy: </div>${element.candy}</div>
			<div id="pokemoncandycount"><div class="property">Candy Count: </div>${element.candy_count}</div>
			<div id="pokemonegg"><div class="property">Egg: </div>${element.egg}</div>
			<div id="pokemonspawnchance"><div class="property">Spawn Chance: </div>${element.spawn_chance}</div>
			<div id="pokemonavgspawns"><div class="property">Average Spawns: </div>${element.avg_spawns}</div>
			<div id="pokemonspawntime"><div class="property">Spawn Time: </div>${element.spawn_time}</div>
			<div id="pokemonmultipliers"><div class="property">Multipliers: </div>${element.multipliers}</div>
			<div id="pokemonweaknesses"><div class="property">Weaknesses: </div>${element.weaknesses}</div>
			<div id="pokemonprevevolution"><div class="property">Previous Evolution: </div>${element.next_evolution}</div>
			<div id="pokemonnextevolution"><div class="property">Next Evolution: </div>${element.next_evolution}</div>
			</div>
		`;
		if (element.name.toLowerCase().includes(`${searchedPokemon}`) || element.id === parseInt(searchedPokemon)) {
			pokemonList.push(element);
			results.innerHTML += pokemonInfo;
		} else {
			searchInput.value = '';
			searchInput.placeholder = "Tu búsqueda no arrojó resultados";
			searchInput.style.backgroundColor =  "rgb(196, 187, 107)";
		}
	});
	colorBgAndShow();
};

//Funcion que obtiene la imagen, numero y nombre de cada pokemon y lo incluye en una lista.
const pokemonShowlist = pokemonObj.map((element) => 
		`<div class="allpokemon">
			<img id="img" src="${element.img}">
			<div id="id">${element.id}</div>
			<div id="name">${element.name}</div>
		</div>`
);

//Función que se encarga de imprimir dichos resultados en pantalla
const printShowlist = () => {
	results.innerHTML = "";
	pokemonShowlist.forEach(element => {results.innerHTML += element;});
	description.style.display = 'none';
};

//Funcion para ordenar la lista por orden alfabético
const printSortedList = () => {
	results.innerHTML = "";
	kantodex.sortData(pokemonObj).forEach((element) => {
		let sortedPokemon = `<div class="allpokemon"><img id="img" src="${element.img}"><div id="id">${element.id}</div><div id="name">${element.name}</div></div>`;
		results.innerHTML += sortedPokemon;
	}
	);
};

//Funcion para imprimir lista de Pokemon filtrados
const printFilteredPokemon = () => {
		results.innerHTML = "";
        kantodex.filterData(pokemonObj,condition.value).forEach((element) => {
            let pokemonInfo = 
                `
                <div class="pokemoninfo">
                <div id="pokemonid">${element.id}</div>
                <div id="pokemonname">${element.name}</div>
                <img id="pokemonimg" src="${element.img}">
                <div id="pokemontype">Type: ${element.type}</div>
                <div id="pokemonheight">Height: ${element.height}</div>
                <div id="pokemonweight">Weight: ${element.weight}</div>
                <div id="pokemoncandy">Candy: ${element.candy}</div>
                <div id="pokemoncandycount">Candy Count: ${element.candy_count}</div>
                <div id="pokemonegg">Egg: ${element.egg}</div>
                <div id="pokemonspawnchance">Spawn Chance: ${element.spawn_chance}</div>
                <div id="pokemonavgspawns">Average Spawns: ${element.avg_spawns}</div>
                <div id="pokemonspawntime">Spawn Time: ${element.spawn_time}</div>
                <div id="pokemonmultipliers">Multipliers: ${element.multipliers}</div>
                <div id="pokemonweaknesses">Weaknesses: ${element.weaknesses}</div>
                <div id="pokemonnextevolution">Next Evolution: ${element.next_evolution}</div>
                </div>
                `
            ;
            results.innerHTML += pokemonInfo;
        });
	};

//Funcion para mostrar About Kanto Dex
const showAboutUs = () => {
    description.style.display = 'none';
    searchInput.style.display = 'none';
	searchButton.style.display = 'none';
	condition.style.display = 'none';
	filterButton.style.display = 'none';
	showAllButton.style.display = 'none';
	resetButton.style.display = 'none';
    footer.style.display = 'none';
    results.style.display = 'none';
	aboutUs.style.display = 'block';
	sortButton.style.display = 'none';

};
//Botones
aboutUsButton.addEventListener('click', showAboutUs);
showAllButton.addEventListener('click', printShowlist);
searchButton.addEventListener('click', validateSearchInput);
filterButton.addEventListener('click', printFilteredPokemon);
resetButton.addEventListener('click', resetForm);
sortButton.addEventListener('click', printSortedList);
