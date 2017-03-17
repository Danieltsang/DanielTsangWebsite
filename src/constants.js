const Constants = {
    skillsChart: {
        type: 'line',
        data: {
            xLabels: ["", "Javascript", "React", "jQuery", "HTML", "CSS", "PHP", "Java", "Golang", "MySQL"],
            yLabels: ["", "Expert", "Advanced", "Intermediate", "Novice", "Basic", ""],
            datasets: [{
                data: ["", "Advanced", "Advanced", "Intermediate", "Expert", "Expert", "Intermediate", "Novice", "Basic", "Novice"],
                pointBackgroundColor: [
                    'rgba(255, 99, 132, 0)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(132, 159, 64, 0.2)',
                    'rgba(132, 100, 64, 0.2)',
                    'rgba(140, 25, 64, 0.2)'
                ],
                pointBorderColor: [
                    'rgba(255,99,132,0)',
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(132, 159, 64, 1)',
                    'rgba(132, 100, 64, 1)',
                    'rgba(145, 25, 64, 1)'
                ],
                borderWidth: 1,
                fill: false,
                showLine: false,
                pointHoverBackgroundColor: 'rgba(0, 0, 0, 0)',
                pointHoverBorderColor: 'rgba(255, 255, 255, 0)',
                pointRadius: 10,
                pointHoverRadius: 40,
                pointStyle: 'rectRot'
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    display: true
                }],
                yAxes: [{
                    display: true,
                    type: 'category',
                    position: 'left',
                    mirror: true
                }]
            },
            legend: {
                display: false
            }
        }
    },
    initialSkillsChartData: ["", "Advanced", "Advanced", "Intermediate", "Expert", "Expert", "Intermediate", "Novice", "Basic", "Novice"]
};

export default Constants;