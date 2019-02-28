'use strict';

window.kantodex = {
//Funcion para filtrar por tipo:
    filterData: (data,setCondition) => {
        data;
        //console.log(data);
        const filteredPokemonObj = data.filter(element => {
            for (let i = 0; i < element.type.length; i++) {
                if (element.type[i] == setCondition) {
                    return element;
                }
               // console.log(element);
            }
        });
        return filteredPokemonObj;
    }

};
/*    

filterData: (pokemonObj, pokemonList, setCondition) => {

        console.log(pokemonObj);

        if (pokemonList === []) {
            pokemonList = pokemonObj;
        }

        let filteredPokemonList = [];

        console.log(filteredPokemonList);

        pokemonList.forEach((element) => {

            element['type'].forEach((element) => {
                if (element === `${setCondition}`) {
                    filteredPokemonList.push(element);
                    console.log(filteredPokemonList);
                }
            });
        });
    }

    }*/ 