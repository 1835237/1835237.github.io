var mychart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: [
            'マレー系',
             '中国系',
             'インド系',
            'その他',
        ],
        datasets: [{
            label: 'サンプルグラフ',
            data: [
                69.6,
                22.6,
                6.8,
                1,
            ],
            backgroundColor: [
                'rgba(241, 107, 141, 1)',
                'rgba( 31, 167, 165, 1)',
                'rgba(249, 199,  83, 1)',
                'rgba(176, 110,  30, 1)',
                'rgba(124,  91, 164, 1)'
            ]
        }]
    },
    options: {
        legend: {
            position: 'bottom',
        },
        scales: {
            yAxes: [{
                ticks: {
                    display: false,
                    beginAtZero: true,
                },
                gridLines: {
                    display: false
                }
            }]
        }
    }
});
var mychart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: [
            'イスラム教',
            '仏教',
            'キリスト教',
            'ヒンドゥー教',
            '儒教・道教等',
            'その他',
        ],
        datasets: [{
            label: 'サンプルグラフ',
            data: [
                61.3,
                19.8,
                9.2,
                6.3,
                1.3,
                2.1,
            ],
            backgroundColor: [
                'rgba(241, 107, 141, 1)',
                'rgba( 31, 167, 165, 1)',
                'rgba(249, 199,  83, 1)',
                'rgba(176, 110,  30, 1)',
                'rgba(124,  91, 164, 1)'
            ]
        }]
    },
    options: {
        legend: {
            position: 'bottom',
        },
        scales: {
            yAxes: [{
                ticks: {
                    display: false,
                    beginAtZero: true,
                },
                gridLines: {
                    display: false
                }
            }]
        }
    }
});