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

/*Funcion que obtiene la imagen, numero y nombre de cada pokemon y lo incluye en una lista.
printResults es la función que se encarga de imprimir dichos resultados en pantalla */
const pokemonShowlist = pokemonObj.map(pokemonObj => `<div class="pokemonInfo"><img src="${pokemonObj.img}" height="30px" width="30px">${pokemonObj.id}. ${pokemonObj.name}</div>`);
const printResults = () => pokemonShowlist.forEach(element => {results.innerHTML += element});

//Funcion que obtiene la información de 1 pokemon buscado.
const searchPokemon = () => {
	let searchedPokemon = searchInput.value.toLowerCase();
	pokemonObj.forEach((element) => {
    let pokemonList = [];
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


//Funcion para mostrar About Kanto Dex
let showAboutUs = () => {
    description.style.display = 'none';
    searchInput.style.display = 'none';
    searchButton.style.display = 'none';
    showAllButton.style.display = 'none';
    footer.style.display = 'none';
    results.style.display = 'none';
    aboutUs.style.display = 'block';
};
aboutUsButton.addEventListener('click', showAboutUs);
showAllButton.addEventListener('click', printResults);
searchButton.addEventListener('click', searchPokemon);