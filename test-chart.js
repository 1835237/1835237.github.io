// 折れ線グラフ
var labels = ['January', 'February', 'March', 'April', 'May', 'June'];

var data = {
    labels: labels,
    datasets: [{
        label: '初めてのグラフ',
        // rgbは0から255までの数字で設定できる
        borderColor: 'rgb(255, 100, 130)',
        data: [0, 10, 15, 3, 20, 60, 10],
    }]
};

var config = {
    type: 'line',
    data,
    options: {},
};

var lineChart = new Chart(
    document.getElementById('lineChart'),
    config,
);

// 棒グラフ
