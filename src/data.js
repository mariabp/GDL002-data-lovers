'use strict';

window.kantodex = {
//Funcion para filtrar por tipo:
    filterData: (data,condition) => {
                    const filteredPokemonObj = data.filter(element => {
                        for (let i = 0; i < element.type.length; i++) {
                            if (element.type[i] == condition) {
                                return element;
                            }
                        }
                    });
                    return filteredPokemonObj;
    },
 //   sortData: (data,sortBy,sortOrder) => {},
 //   computeStats: (data) => {}*/
};
