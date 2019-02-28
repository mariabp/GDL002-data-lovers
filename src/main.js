'use strict';

const searchButton = document.querySelector('#searchbutton');
const showAllButton = document.querySelector('#showall');
const description = document.querySelector('h1');
const footer = document.querySelector('footer');
const results = document.querySelector('#results');
const pokemonObj = POKEMON.pokemon;
const searchInput = document.querySelector('#searchbar');
const aboutUsButton = document.querySelector('#aboutUsButton');
const aboutUs = document.querySelector('p');
let condition = document.querySelector('select');
const filterButton = document.querySelector('#filterbutton');
let pokemonList = [];
let setCondition = condition.value;


//Funcion para validar el texto que ingreso el usuario
const validateSearchInput = () => {
	if (searchInput.value.length < 1) {
		searchInput.placeholder = "Es necesario escribir algo...";
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

/*Funcion que cambia de color el campo donde el usuario ingresa su busqueda,
/*resetea valor de busqueda del usuario a vacio y
/*esconde el contenedor de resultados */
const warnAndReset = () => {
	searchInput.style.backgroundColor =  "rgb(248, 126, 126)";
	searchInput.value = "";
	results.style.display = "none";
};	

//Funcion que obtiene la información de 1 pokemon buscado.
const searchPokemon = () => {
	let searchedPokemon = searchInput.value.toLowerCase();
	pokemonObj.forEach((element) => {
    pokemonList = [];
    let pokemonInfo = `
			<div class="pokemoninfo">
			<div id="id">${element.id}</div>
			<div id="name">${element.name}</div>
			<img id="img" src="${element.img}">
			<div id="type">Type: ${element.type}</div>
			<div id="height">Height: ${element.height}</div>
			<div id="weight">Weight: ${element.weight}</div>
			<div id="candy">Candy: ${element.candy}</div>
			<div id="candycount">Candy Count: ${element.candy_count}</div>
			<div id="egg">Egg: ${element.egg}</div>
			<div id="spawnchance">Spawn Chance: ${element.spawn_chance}</div>
			<div id="avgspawns">Average Spawns: ${element.avg_spawns}</div>
			<div id="spawntime">Spawn Time: ${element.spawn_time}</div>
			<div id="multipliers">Multipliers: ${element.multipliers}</div>
			<div id="weaknesses">Weaknesses: ${element.weaknesses}</div>
			<div id="nextevolution">Next Evolution: ${element.next_evolution}</div>
			</div>
			`;
		if (element.name.toLowerCase().includes(`${searchedPokemon}`) || element.id === parseInt(searchedPokemon)) {
			pokemonList.push(element);
			results.innerHTML += pokemonInfo;
		}
	});
};

//Funcion que obtiene la imagen, numero y nombre de cada pokemon y lo incluye en una lista.
const pokemonShowlist = pokemonObj.map(pokemonObj => `<div class="pokemonInfo"><img src="${pokemonObj.img}" height="30px" width="30px">${pokemonObj.id}. ${pokemonObj.name}</div>`);

//Función que se encarga de imprimir dichos resultados en pantalla
const printResults = () => pokemonShowlist.forEach(element => {results.innerHTML += element;});

//Funcion para mostrar About Kanto Dex
const showAboutUs = () => {
    description.style.display = 'none';
    searchInput.style.display = 'none';
	searchButton.style.display = 'none';
	condition.style.display = 'none';
	filterButton.style.display = 'none';
	showAllButton.style.display = 'none';
    footer.style.display = 'none';
    results.style.display = 'none';
    aboutUs.style.display = 'block';
};

const printFilteredPokemon = () => {
        kantodex.filterData(pokemonObj,condition.value).forEach((element) => {
            let pokemonInfo = 
                `
                <div class="pokemoninfo">
                <div id="id">${element.id}</div>
                <div id="name">${element.name}</div>
                <img id="img" src="${element.img}">
                <div id="type">Type: ${element.type}</div>
                <div id="height">Height: ${element.height}</div>
                <div id="weight">Weight: ${element.weight}</div>
                <div id="candy">Candy: ${element.candy}</div>
                <div id="candycount">Candy Count: ${element.candy_count}</div>
                <div id="egg">Egg: ${element.egg}</div>
                <div id="spawnchance">Spawn Chance: ${element.spawn_chance}</div>
                <div id="avgspawns">Average Spawns: ${element.avg_spawns}</div>
                <div id="spawntime">Spawn Time: ${element.spawn_time}</div>
                <div id="multipliers">Multipliers: ${element.multipliers}</div>
                <div id="weaknesses">Weaknesses: ${element.weaknesses}</div>
                <div id="nextevolution">Next Evolution: ${element.next_evolution}</div>
                </div>
                `
            ;
            results.innerHTML += pokemonInfo;
        });
	};
//Botones
aboutUsButton.addEventListener('click', showAboutUs);
showAllButton.addEventListener('click', printResults);
searchButton.addEventListener('click', validateSearchInput);
filterButton.addEventListener('click', printFilteredPokemon);



