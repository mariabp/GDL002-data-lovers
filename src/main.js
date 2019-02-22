'use strict';


const searchButton = document.querySelector('#searchbutton');
const showAllButton = document.querySelector('#showall');
//const description = document.querySelector('h1');
//const footer = document.querySelector('footer');
const results = document.querySelector('#results');
const pokemonObj = POKEMON.pokemon;
let searchInput = document.querySelector('#searchbar');


let pokemonList = pokemonObj.map(pokemonObj => `<div class="pokemonInfo"><img src="${pokemonObj.img}" height="30px" width="30px">${pokemonObj.id}. ${pokemonObj.name}</div>`);
const printResults = () => pokemonList.forEach(element => {results.innerHTML += element});


showAllButton.addEventListener('click', printResults);
//searchButton.addEventListener('click', searchPokemon());