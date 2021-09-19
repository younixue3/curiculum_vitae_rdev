const path = require('path');

module.exports = {
    entry: './src/chartjs.js',
    output: {
        path: path.resolve(__dirname, 'src/assets/js/chartsjs'),
        filename: 'chart.js',
    },
};
