Chart.defaults.color = '#fff'
Chart.defaults.borderColor = '#444'

fetch('https://coasters-api.herokuapp.com/country/Spain')
    .then(response => response.json())
    .then(coasters => printCoastersCharts(coasters))


function printCoastersCharts(coasters) {

    const [redForce, dragonKhan, shambala, tarantula, abismo, tornado] = coasters

    printSpeedChart(redForce, dragonKhan, shambala, tarantula, tornado)
    printLengthChart(redForce, dragonKhan, shambala, tarantula, abismo, tornado)
    printHeightChart(redForce, dragonKhan, shambala, tarantula, abismo, tornado)
    printMixedChart(redForce, dragonKhan, shambala, tarantula, abismo, tornado)
}


function printSpeedChart(redForce, dragonKhan, shambala, tarantula, tornado) {

    const data = {
        labels: [redForce.name, dragonKhan.name, shambala.name, tarantula.name, tornado.name],
        datasets: [{
            data: [redForce.speed, dragonKhan.speed, shambala.speed, tarantula.speed, tornado.speed],
            label: 'km/h',
            borderWidth: 2,
            borderColor: ['rgba(116, 72, 194, 1)', 'rgba(33, 192, 215, 1)', 'rgba(217, 158, 43, 1)', 'rgba(205, 58, 129, 1)', 'rgba(156, 153, 204, 1)', 'rgba(225, 78, 202, 1)'],
            backgroundColor: ['rgba(116, 72, 194, 0.4)', 'rgba(33, 192, 215, 0.4)', 'rgba(217, 158, 43, 0.4)', 'rgba(205, 58, 129, 0.4)', 'rgba(156, 153, 204, 0.4)', 'rgba(225, 78, 202, 0.4)']
        }]
    }

    let options = {
        plugins: {
            legend: {
                display: false
            }
        }
    }

    new Chart('chart1', { type: 'bar', data, options })
}




function printLengthChart(redForce, dragonKhan, shambala, tarantula, abismo, tornado) {

    const data = {
        labels: [redForce.name, dragonKhan.name, abismo.name, shambala.name, tarantula.name, tornado.name],
        datasets: [{
            data: [redForce.length, dragonKhan.length, abismo.length, shambala.length, tarantula.length, tornado.length],
            label: 'metros',
            borderWidth: 2,
            borderColor: ['rgba(116, 72, 194, 1)', 'rgba(33, 192, 215, 1)', 'rgba(217, 158, 43, 1)', 'rgba(205, 58, 129, 1)', 'rgba(156, 153, 204, 1)', 'rgba(225, 78, 202, 1)'],
            backgroundColor: ['rgba(116, 72, 194, 0.4)', 'rgba(33, 192, 215, 0.4)', 'rgba(217, 158, 43, 0.4)', 'rgba(205, 58, 129, 0.4)', 'rgba(156, 153, 204, 0.4)', 'rgba(225, 78, 202, 0.4)']
        }]
    }


    const options = {
        plugins: {
            legend: {
                position: 'left'
            }
        }
    }


    new Chart('chart2', { type: 'doughnut', data, options })
}


function printHeightChart(redForce, dragonKhan, shambala, tarantula, abismo, tornado) {

    const data = {
        labels: [redForce.name, dragonKhan.name, abismo.name, shambala.name, tarantula.name, tornado.name],
        datasets: [{
            data: [redForce.height, dragonKhan.height, abismo.height, shambala.height, tarantula.height, tornado.height],
            label: 'metros',
            borderWidth: 2,
            backgroundColor: 'rgba(116, 72, 194, 0.4)'
        }]
    }

    const options = {
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            r: {
                ticks: { display: false }
            }
        }
    }

    new Chart('chart3', { type: 'radar', data, options })
}




function printMixedChart(redForce, dragonKhan, shambala, tarantula, abismo, tornado) {

    const data = {
        labels: [redForce.name, dragonKhan.name, abismo.name, shambala.name, tarantula.name, tornado.name],
        datasets: [

            {
                data: [redForce.height, dragonKhan.height, abismo.height, shambala.height, tarantula.height, tornado.height],
                label: 'metros',
                borderWidth: 5,
                borderColor: 'rgba(33, 192, 215, 1)',
            },
            {
                data: [redForce.speed, dragonKhan.speed, abismo.speed, shambala.speed, tarantula.speed, tornado.speed],
                label: 'km/h',
                borderWidth: 2,
                borderColor: 'rgba(217, 158, 43, 1)',
                backgroundColor: 'rgba(217, 158, 43, .4)',
                type: 'bar'
            },
        ]
    }


    const options = {
        plugins: {
            legend: {
                display: false
            }
        },
        elements: {
            line: {
                tension: 0.4
            }
        }
    }


    new Chart('chart4', { type: 'line', data, options })
}