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
	},

	computeStats: (data, computeType) => {

		let computeInputList = [];
		let floatNumbersArray = [];

		data.forEach((element) => {

			computeInputList.push(element[`${computeType}`]);

		});

		computeInputList.forEach((element) => {

			let splitString = element.split(' ');

			let numbersOnlyArray = splitString.filter((element) => {
				if (/[0-9.]/.test(element)) {
					return true;
				}
			});
			
			numbersOnlyArray.forEach((element) => {
				floatNumbersArray.push(parseFloat(element));
			}) 
			
		});

		let sum = floatNumbersArray.reduce((previous, current) => current += previous);
		let avg = Math.round(sum / floatNumbersArray.length);
		
		return avg;
	
	}
};
 