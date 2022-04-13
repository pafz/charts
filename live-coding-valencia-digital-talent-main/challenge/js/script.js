Chart.defaults.color = '#fff'
Chart.defaults.borderColor = '#444'


fetch('https://multiapi-app.herokuapp.com/foods')
    .then(response => response.json())
    .then(foods => printFoodsCharts(foods))


function printFoodsCharts(foods) {

    const [carrot, pumpkin, corn, avocado, beef, pork] = foods  
    
    printCaloriesChart(carrot, pumpkin, corn, avocado, beef, pork)

    printProteinsChart(carrot, pumpkin, corn, avocado, beef, pork)

    printFatChart(carrot, pumpkin, corn, avocado, beef, pork)

    printCalciumChart(carrot, pumpkin, corn, avocado, beef, pork)

    printCaloriesProteinsChart(carrot, pumpkin, corn, avocado, beef, pork)

}

function printCaloriesChart(carrot, pumpkin, corn, avocado, beef, pork) {
    const data = {
        labels : [carrot.name, pumpkin.name, corn.name, avocado.name, beef.name, pork.name], 
        datasets : [{
            data: [carrot.kcal, pumpkin.kcal, corn.kcal, avocado.kcal, beef.kcal, pork.kcal],
        }]
    }

    let options = {
        plugins: {
            legend: {
                display: false 
            }
        }
    }
    
    new Chart('chart1', { type: 'bar', data, options})
}

function printProteinsChart(carrot, pumpkin, corn, avocado, beef, pork){
    const data = {
        labels: [carrot.name, pumpkin.name, corn.name, avocado.name, beef.name, pork.name],
        datasets: [{
            data: [carrot.protein, pumpkin.protein, corn.protein, avocado.protein, beef.protein, pork.protein],
        }]
    }

    let options = {
        plugins: {
            legend: {
                display: false 
            }
        }
    }
    
    new Chart('chart2', { type: 'doughnut', data, options})
}

function printFatChart(carrot, pumpkin, corn, avocado, beef, pork){
    const data = {
        labels: [carrot.name, pumpkin.name, corn.name, avocado.name, beef.name, pork.name],
        datasets: [{
            data: [carrot.fat, pumpkin.fat, corn.fat, avocado.fat, beef.fat, pork.fat],
        }]
    }

    let options = {
        plugins: {
            legend: {
                display: false 
            }
        }
    }
    
    new Chart('chart3', { type: 'doughnut', data, options})
}

function printCalciumChart(carrot, pumpkin, corn, avocado, beef, pork){
    const data = {
        labels: [carrot.name, pumpkin.name, corn.name, avocado.name, beef.name, pork.name],
        datasets: [{
            data: [carrot.calcium, pumpkin.calcium, corn.calcium, avocado.calcium, beef.calcium, pork.calcium],
            display: false
        }]
    }

    let options = {
        plugins: {
            legend: {
                display: false 
            }
        }
    }
    
    new Chart('chart4', { type: 'doughnut', data, options})
}

function printCaloriesProteinsChart(carrot, pumpkin, corn, avocado, beef, pork){
    const data = {
        labels : [carrot.name, pumpkin.name, corn.name, avocado.name, beef.name, pork.name],
        datasets: [{
            data: [carrot.kcal, pumpkin.kcal, corn.kcal, avocado.kcal, beef.kcal, pork.kcal],
        },
        {
            data: [carrot.protein, pumpkin.protein, corn.protein, avocado.protein, beef.protein, pork.protein],
        }]
    }

    let options = {
        plugins: {
            legend: {
                display: false 
            }
        }
    }

    new Chart('chart5', { type: 'bar', data, options})
}