'use strict';


/*
window.show = {

  
  showAll : (pokemonObj) => {
   
    pokemonObj.forEach((element) => {
      let pokemonInfo = element.id + ' ' + element.name;
      pokemonList.push(pokemonInfo);
    });
    pokemonList.forEach((element) => {
      results.innerHTML += element;
    });
  },

    searchPokemon : (pokemonObj) => {
      let pokemonList = [];
      let searchInput = document.querySelector('#searchbar');
      let searchedPokemon = searchInput.value;
      pokemonObj.forEach((element) => {
        let pokemonInfo = element.id + ' ' + element.name; 
        if (element.name.toLowerCase().includes(`${searchedPokemon.toLowerCase()}`)) {
          pokemonList.push(pokemonInfo);
          results.innerHTML = pokemonList;
        } else {
          results.innerHTML = 'Tu búsqueda no arrojó resultados';
        }
      });
    } 
};
 */