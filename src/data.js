'use strict';

window.kantodex = {
//Funcion para filtrar por tipo:
    filterData: (data, setCondition, pokemonList) => {
        data;
        pokemonList = data.filter(element => {
            for (let i = 0; i < element.type.length; i++) {
                if (element.type[i] == setCondition) {
                    return element;
                }
            }
        });
        return pokemonList;
    },
//Fucion para ordenar por nombre 
    sortData:(data) => {
        const nameList = data.map(element=> {
            return element.name;
        });
      
        const orderedNames = nameList.sort(function(a,b){
            return a.localeCompare(b);
        });

        const orderedObjects = orderedNames.map(name => data.find(element => element.name === name));
        return orderedObjects;
    }
};
 