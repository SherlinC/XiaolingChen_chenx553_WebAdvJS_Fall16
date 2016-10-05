var Xray = require('x-ray');
var x = Xray();

// 1st argument: URL you want to scrape
// 2nd argument: the selector that you want to grab
// 3rd argument: the array containing object of what you want to be passed on
x('http://www.billboard.com/charts/hot-100', '.chart-data', [{
	hot100music: x('.js-chart-row', [{
	title: '.chart-row__song'
	
	}])
}])
	
    .write('results.json');