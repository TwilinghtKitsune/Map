ymaps.ready(init);

// json 
let points = '{"points":[';
let p1 = '{ "coordinates1":51.526125, "coordinates2":45.979220, "balloonContentHeader": "img/image.png", "balloonContentBody": "Стела, установленная в честь героя Советского союза Клочкова В.Г.", "hintContent": "Стела Героя Советского Союза Клочкова В.Г.", "src" : "img/image.png", "text" : "Стела, установленная в честь героя Советского союза Клочкова В.Г." },';
let p2 = '{ "coordinates1":51.518508, "coordinates2": 46.006408, "balloonContentHeader": "img/image.png", "balloonContentBody": "Стела, установленная в честь тружеников тыла", "hintContent": "Памятник труженикам тыла", "src" : "img/image.png", "text" : "Стела, установленная в честь тружеников тыла" },';
let p3 = '{ "coordinates1": 51.525439, "coordinates2": 46.005223, "balloonContentHeader": "img/image.png", "balloonContentBody": "Стела, установленная в честь героя Советского союза Хользунова А.И.", "hintContent": "Стела Героя Советского Союза Хользунова А.И.", "src" : "img/image.png", "text" : "Стела, установленная в честь героя Советского союза Хользунова А.И." },';
let p4 = '{ "coordinates1": 51.515092, "coordinates2": 45.989664, "balloonContentHeader": "img/image.png", "balloonContentBody": "Стела, установленная в честь героя Советского союза Грибова П.И.", "hintContent": "Стела Героя Советского Союза Грибова П.И.", "src" : "img/image.png", "text" : "Стела, установленная в честь героя Советского союза Грибова П.И." },';
let p5 = '{ "coordinates1": 51.538350, "coordinates2": 45.991328, "balloonContentHeader": "img/image.png", "balloonContentBody": "Стела, установленная в честь героя Советского союза Емлютина Д.В.", "hintContent": "Стела Героя Советского Союза Емлютина Д.В.", "src" : "img/image.png", "text" : "Стела, установленная в честь героя Советского союза Емлютина Д.В." },';
let p6 = '{ "coordinates1": 51.49367301783019, "coordinates2": 45.92122820983902, "balloonContentHeader": "img/image.png", "balloonContentBody": "Стела, установленная в честь героя Советского союза Расковой М.М.", "hintContent": "Стела Героя Советского Союза Расковой М.М.", "src" : "img/image.png", "text" : "Стела, установленная в честь героя Советского союза Расковой М.М." },';
let p7 = '{ "coordinates1": 51.49612596537969, "coordinates2": 45.93894175758242, "balloonContentHeader": "img/image.png", "balloonContentBody": "Стела, установленная в честь героя Советского союза Пономарёва П.Т.", "hintContent": "Стела Героя Советского Союза Пономарёва П.Т.", "src" : "img/image.png", "text" : "Стела, установленная в честь героя Советского союза Пономарёва П.Т." }';
points += p1 + p2 + p3 + p4 + p5 + p6 + p7 + "]}";
let point = JSON.parse(points);

function init(){
    let myMap = new ymaps.Map("map", {
        center: [51.525746, 45.988529],
        zoom: 13, //or 13.5 
        controls: ['zoomControl'] // Оставляет только «Ползунок масштаба»
    },{suppressMapOpenBlock: true}); // Убирает кнопки "как добраться" и "доехать на такси"
    
    let marks = [];
    

    // С json
    for(let i = 0; i < point.points.length; i++){
        marks[i] = new ymaps.Placemark([point.points[i].coordinates1, point.points[i].coordinates2], {
            balloonContent: '<div class = "wrapper">' + 
                            "<div class = 'content-image'> <img type='image2' src= " + point.points[i].balloonContentHeader + " alt=' '> </div>" +
                            `<div class = 'content-body'> ${point.points[i].balloonContentBody} </div>` +
                            "<div class = 'content-footer'> <input type='button' class = 'butMark' value='Узнать подробнее...' onclick='moreInf(' + i + ')'> </<div></div>",
            hintContent: point.points[i].hintContent,
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/326703_favorite_rate_star_icon.png',
            iconImageSize: [40, 40],
            iconImageOffset: [-20, -20]           
        });
    }

    

    let clusterer = new ymaps.Clusterer({
        clusterIcons: [
            {
                href: 'img/star.png',
                size: [42, 42],
                offset: [-20, -20]
            }],
        
        showInAlphabeticalOrder: true,        //Показывать метки в балуне в алфавитном порядке при нажатии на кластер (умолч. false)
        clusterDisableClickZoom: true,
    });
    clusterer.add(marks);
    myMap.geoObjects.add(clusterer);
}

function moreInf(i) {
    document.getElementById("moreData").style.display = "block";
    document.getElementById("divForText").innerHTML = "<h><b>" + point.points[i].hintContent + "</b><br><br></h><img type='image' src= '" + point.points[i].src  + "' alt='Точка' style = 'width: 100px; height: auto'><p><br>" + point.points[i].text + "</p>";
}

function closeMoreInf() {
    console.log("close");
    document.getElementById("moreData").style.display = 'none';
}