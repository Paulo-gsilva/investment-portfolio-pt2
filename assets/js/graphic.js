//GRÁFICO
const areaGraphic = document.getElementById('graphic');

const labels = [
  'January', 
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September', 
  'October',
  'November', 
  'December'
]

const data = {
    labels,
    datasets: [{
        data: [182, 256, 332, 332, 316, 213, 245, 247, 242, 348, 350, 322],
        label: "BTC",
        borderColor: 'orange',
    },
    {
        data: [7, 8, 10, 15, 16, 14, 12, 17, 16, 24, 26, 20],
        label: "ETH", 
        borderColor: 'blue'   
    },
    {
        data: [0.005, 0.015, 0.02, 0.05, 0.045, 0.025, 0.035, 0.12, 0.15, 1.2, 1, 0.8],
        label: "SOL", 
        borderColor: 'purple'   
    },
    {
    data: [0, 0, 0, 0.001, 0.0008, 0.0005, 0.0012, 0.001, 0.0005, 0.00035, 0.0004, 0.00025],
        label: "SLP",
        borderColor: 'pink',  
    },
    {
        data: [0.045, 0.07, 0.2, 0.07, 0.065, 0.069, 0.15, 0.088, 0.083, 0.08, 0.078, 0.07],
        label: "CAKE", 
        borderColor: 'brown'   
    },
    {
        data: [0.23, 1.2, 1.7, 3.4, 1.8, 1.5, 1.7, 2.4, 2.1, 2.9, 3.5, 2.8],
        label: "BNB", 
        borderColor: 'yellow' 
    }]
};

const config = {
  type: 'line',
  data,
  options:{
    responsive: true,
    layout: {
        padding: {
            bottom: 20
        }
    },
    hoverRadius: 10,
    scales:{
        y:{
            ticks:{
                callback: function(value){
                    let finalValue = value;
                    return `R$ ${finalValue}K`;
                }
            }
        }
    }
  }
};

const myGraphic = new Chart(areaGraphic, config);