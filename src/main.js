'use strict';


const searchButton = document.querySelector('#searchbutton');
const showAllButton = document.querySelector('#showall');
const description = document.querySelector('h1');
const footer = document.querySelector('footer');
const results = document.querySelector('#results');
const pokemonObj = POKEMON.pokemon;
let searchInput = document.querySelector('#searchbar');
const aboutUsButton = document.querySelector('#aboutUsButton');
const aboutUs = document.querySelector('p');

let pokemonList = pokemonObj.map(pokemonObj => `<div class="pokemonInfo"><img src="${pokemonObj.img}" height="30px" width="30px">${pokemonObj.id}. ${pokemonObj.name}</div>`);
const printResults = () => pokemonList.forEach(element => {results.innerHTML += element});


showAllButton.addEventListener('click', printResults);


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