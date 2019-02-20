'use strict';

let userRequest = document.querySelector('#searchbar');
const searchButton = document.querySelector('#searchbutton');
const showAllButton = document.querySelector('#showall');
const description = document.querySelector('h1');
const footer = document.querySelector('footer');
const pokemonObj = POKEMON.pokemon;

const showResults = () => {
    searchButton.style.display = 'none';
    userRequest.style.display = 'none';
    showAllButton.style.display = 'none';
    description.style.display = 'none';
    footer.style.display = 'none';
    }
;


searchButton.addEventListener('click', showResults);
//showAllButton.addEventListener('click', window.data.showAll);