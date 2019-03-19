
const typeChart = document.getElementById("typechart");

// eslint-disable-next-line no-undef
const byTypeChart = new Chart(typeChart, {

    type: 'bar',
    
    data: {
            labels: ['Normal',
                    'Fire',
                    'Water',
                    'Grass',
                    'Electric', 
                    'Ice',
                    'Fighting',
                    'Poison',  
                    'Ground',
                    'Flying', 
                    'Psychic',
                    'Bug',
                    'Rock', 
                    'Ghost', 
                    'Dragon'
                    ], 

            datasets: [{

                label: 'Tipos de Pokemon',

                backgroundColor: [
                    'rgb(239, 160, 127)',
                    'rgb(238, 129, 129)',
                    'rgb(129, 221, 238)',
                    'rgb(129, 238, 129)',
                    'rgb(238, 232, 129)',
                    'rgb(129, 238, 216)',
                    'rgb(129, 138, 238)',
                    'rgb(205, 238, 129)',
                    'rgb(238, 168, 129)',
                    'rgb(129, 225, 238)',
                    'rgb(192, 129, 238)',
                    'rgb(238, 196, 129)',
                    'rgb(129, 150, 238)',
                    'rgb(238, 129, 207)',
                        ],
                
                borderWidth: 0,

                data: [24, 12, 32, 14, 9, 5, 8, 33, 2, 19, 14, 12, 11, 3, 3]
            }],

    },

    options: {

        responsive: true,
        maintainAspectRatio: true, 
        animation: {
					animateRotate: true,
					animateScale: true
		},

        legend: {
            display: true,
            position: 'bottom',
            labels: {
                fontFamily: 'Dosis',
                fontSize: 16,
                fontColor: 'rgb(255, 255, 255)'
            }
        },

        scales: {
            scaleLabel: {
                display: false
            }
        }

    }
});

byTypeChart;


