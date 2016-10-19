

//english version 
var filmNames = [];

    d3.json("film.json", function(words) {
        console.log(words[0]);
        console.log(words[0].film.length);
  for(i=0; i < words[0].film.length; i++ ){
    filmNames.push(words[0].film[i]);
    console.log(filmNames[i]);
  }

    var color = d3.scale.linear()
            .domain([0,1,2,3,4,5,6,10,15,20,100])
            .range(["#rgb(183, 208, 154)", "#rgb(139, 183, 140)", "#rgb(107, 162, 157)", "#rgb(107, 162, 147)", "#rgb(123, 156, 84)", "#rgb(51, 86, 10)", "#777", "#rgb(183, 208, 154)", "#rgb(107, 162, 147)", "#rgb(99, 99, 99)", "#rgb(183, 208, 154)", "#9E9E9E"]);

    d3.layout.cloud()
            .size([1000, 1200])
            .words(filmNames)
            .rotate(0)
            .fontSize(function(d) { console.log("d.size="+d.size);return d.size; })
            .on("end", draw)
            .start();

    function draw(word) {
        console.log('111');
        console.log(word);
        d3.select("body").append("svg")
                .attr("width", 1200)
                .attr("height", 650)
                .attr("class", "wordcloud")
                .append("g")
                .attr("transform", "translate(320,200)")
                .selectAll("text")
                .data(word)
                .enter().append("text")
                .style("font-size", function(d) { console.log("wordsize"+d.size);return d.size + "px"; })
                .style("fill", function(d, i) {
                     return color(i); 
                })
                .attr("transform", function(d) {
                    console.log(d);
                    console.log(d.size);
                    return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
                })
                .text(function(d) { return d.text; });
    }

    });
// chinese pop up 
var app = app || {};

app.main = (function() {

    function attachEvents() {
        // For 'About' button
        $('.filters button.abt').click(function (e) {
            e.preventDefault();
            window.location.hash = '#about';
        });
        
        // For 'Close (X)' buttons
        $('.close').click(function (e) {
            e.preventDefault();
            window.location.hash = '#';
        });
    }

    function render(url) {
        // Get the keyword from the url.
        var temp = url.split('/')[0];

        // Hide whatever page is currently shown.
        $('.main-content .page').removeClass('visible');

        var map = {
            // The "Homepage".
            '': function() {
                console.log("This should be the homepage");
                $('.main-content .all-students').addClass('visible');
            },

            '#about': function() {
                renderAboutPage();
            },

            '#contact': function() {
                renderContactPage();
            }
        };

        // Execute the needed function depending on the url keyword (stored in temp).
        if(map[temp]){
            map[temp]();
        }
        else {
            renderErrorPage();
        }
    }


    function renderAboutPage(){
        var page = $('.about');
        page.addClass('visible');
    }

    function renderContactPage(){
        var page = $('.contact');
        page.addClass('visible');
    }

    function renderErrorPage(){
        var page = $('.error');
        page.addClass('visible');
    }

    var init = function(){
        console.log('Initializing app.');
        attachEvents();

        $(window).on('hashchange', function(){
            // On every hash change the render function is called with the new hash.
            // This is how the navigation of our app happens.
            render(decodeURI(window.location.hash));
        }).trigger('hashchange');
    };

    return {
        init: init
    };
})();

/* Wait for all elements on the page to load */
window.addEventListener('DOMContentLoaded', app.main.init);


//chinese  word 

    var frequency_list = [
    {"text":"纵横四海","size":55},
    {"text":"星月童话","size":40},{"text":"红楼春上春","size":15},
    {"text":"狗咬狗骨","size":10},{"text":"爱情故事","size":15},
    {"text":"喝采","size":20},{"text":"柠檬可乐","size":15},
    {"text":"失业生","size":15},{"text":"冲激21","size":15},
    {"text":"烈火青春","size":35},{"text":"杨过与小龙女","size":15},
    {"text":"第一次","size":15},{"text":"鼓手","size":15},
    {"text":"三文治","size":35},{"text":"圣诞快乐","size":45},
    {"text":"缘分","size":65},{"text":"龙凤智多星","size":30},
    {"text":"为你钟情","size":51},{"text":"求爱反斗星","size":16},
    {"text":"英雄本色","size":60},
    {"text":"偶然","size":15},{"text":"倩女幽魂","size":70},
    {"text":"杀之恋","size":10},{"text":"胭脂扣","size":40},
    {"text":"新最佳拍档","size":20},{"text":"阿飞正传","size":35},
    {"text":"豪门夜宴","size":45},{"text":"家有囍事","size":40},
    {"text":"蓝江传之反飞组风云","size":10},{"text":"射雕英雄传之东成西就","size":25},
    {"text":"霸王别姬","size":40},{"text":"白发魔女传","size":10},
    {"text":"花田囍事","size":35},{"text":"锦绣前程","size":35},
    {"text":"东邪西毒","size":40},{"text":"金枝玉叶","size":15},
    {"text":"大富之家","size":15},{"text":"金玉满堂","size":35},
    {"text":"夜半歌声","size":15},{"text":"新上海滩","size":20},
    {"text":"色情男女","size":15},{"text":"大三元","size":35},
    {"text":"风月","size":15},{"text":"春光乍泄","size":65},
    {"text":"红色恋人","size":15},{"text":"九星报喜","size":15},
    {"text":"安娜马德莲娜","size":15},{"text":"流星语","size":5},
    {"text":"恋战冲绳","size":35},{"text":"枪王","size":15},
    {"text":"烟飞烟灭","size":10},{"text":"异度空间","size":15}
    ];
    var color = d3.scale.linear()
            .domain([0,1,2,3,4,5,6,10,15,20,100])
            .range(["#rgb(183, 208, 154)", "#rgb(139, 183, 140)", "#rgb(107, 162, 157)", "#rgb(107, 162, 147)", "#rgb(123, 156, 84)", "#rgb(51, 86, 10)", "#777", "#rgb(183, 208, 154)", "#rgb(107, 162, 147)", "#rgb(99, 99, 99)", "#rgb(183, 208, 154)", "#9E9E9E"]);

    d3.layout.cloud().size([2600, 2200])
            .words(frequency_list)
            .rotate(0)
            .fontSize(function(d) { return d.size; })
            .on("end", draw)
            .start();

    function draw(words) {
        d3.select(".container").append("svg")
                .attr("width", 2300)
                .attr("height", 1850)
                .attr("class", "wordcloud2")
                .append("g")
                // without the transform, words words would get cutoff to the left and top, they would
                // appear outside of the SVG area
                .attr("transform", "translate(320,200)")
                .selectAll("text")
                .data(words)
                .enter().append("text")
                .style("font-size", function(d) { return d.size + "px"; })
                .style("fill", function(d, i) { return color(i); })
                .attr("transform", function(d) {
                    return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
                })
                .text(function(d) { return d.text; });
    }
