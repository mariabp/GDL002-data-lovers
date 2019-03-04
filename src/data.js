'use strict';

window.kantodex = {
//Funcion para filtrar por tipo:
    filterData: (data, setCondition) => {

        let filteredData = data.filter((element) => {
            for (let i = 0; i < element.type.length; i++) {
                if (element.type[i] === setCondition) {
                    return element;
                }
            }
        });
        
        return filteredData;
    },
//Fucion para ordenar por nombre 
    sortData:(data) => {

        data.sort((a, b) => {
            if (a.name.toLowerCase() < b.name.toLowerCase()) {
                return -1;
            }
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1;
            }
            return 0;
        });

        return data;
    }
};
 