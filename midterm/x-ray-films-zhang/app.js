var Xray = require('x-ray');
var x = Xray();


x('http://www.imdb.com/name/nm0002000/?ref_=fn_al_nm_1', '.filmo-category-section', [{
	film: x('.filmo-row',[{
	title: 'a'
	
	}])
}])
	
    .write('film.json');