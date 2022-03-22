ymaps.ready(init);
import {listPlaces} from './places.js'
let coords;
    navigator.geolocation.getCurrentPosition((pos)=>coords = [pos.coords.latitude,pos.coords.longitude]);
let bubble1 = document.getElementById('bubble1');

    

function init () {
    ymaps.domEvent.manager.add(bubble1,'click',function (event){
        myMap.geoObjects.removeAll();
        listPlaces.forEach(element => {      
            if(element.type=="monument") 
            myMap.geoObjects.add(setPlacemark(element)).add(myPlacemark);
        });
       
    })
    console.log("dsadasd")
    if (coords==undefined) coords = [51.529,45.98]
    let  myMap = new ymaps.Map('map', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [coords[0], coords[1]], // Москва
        zoom: 15
    }, {
        searchControlProvider: 'yandex#search'
    });
    let myPlacemark = new ymaps.Placemark(myMap.getCenter(),{},  {
        iconLayout: 'default#image',
        iconImageHref: "sources/metkaMySelf.png",
        iconImageSize: [50, 50],
        iconImageOffset: [-5, -38]
    })
    myMap.geoObjects.add(myPlacemark);
    

    /*for (let i =0;i<listPlaces.length;i++){
        myMap.geoObjects.add(setPlacemark(listPlaces[i]))
    }*/
    var myPolygon = new ymaps.Polygon([ [ [ 51.5432, 46.0487 ], [ 51.5432, 46.0498 ], [ 51.5437, 46.0505 ], 
        [ 51.5436, 46.0512 ], [ 51.5439, 46.0517 ], [ 51.5435, 46.0527 ], 
        [ 51.5418, 46.0544 ], [ 51.5416, 46.0541 ], [ 51.5420, 46.0533 ], 
        [ 51.5424, 46.0529 ], [ 51.5427, 46.0525 ], [ 51.5431, 46.0524 ], 
        [ 51.5430, 46.0516 ], [ 51.5428, 46.0513 ], [ 51.5424, 46.0522 ], 
        [ 51.5422, 46.0521 ], [ 51.5421, 46.0525 ], [ 51.5419, 46.0529 ], 
        [ 51.5412, 46.0537 ], [ 51.5409, 46.0550 ], [ 51.5408, 46.0558 ], 
        [ 51.5407, 46.0565 ], [ 51.5404, 46.0571 ], [ 51.5399, 46.0568 ], 
        [ 51.5401, 46.0575 ], [ 51.5399, 46.0583 ], [ 51.5392, 46.0603 ], 
        [ 51.5386, 46.0615 ], [ 51.5391, 46.0618 ], [ 51.5378, 46.0643 ], 
        [ 51.5370, 46.0658 ], [ 51.5365, 46.0655 ], [ 51.5362, 46.0662 ], 
        [ 51.5364, 46.0673 ], [ 51.5362, 46.0684 ], [ 51.5362, 46.0697 ], 
        [ 51.5371, 46.0700 ], [ 51.5374, 46.0701 ], [ 51.5379, 46.0705 ], 
        [ 51.5383, 46.0712 ], [ 51.5389, 46.0721 ], [ 51.5394, 46.0738 ], 
        [ 51.5398, 46.0742 ], [ 51.5400, 46.0733 ], [ 51.5398, 46.0724 ], 
        [ 51.5401, 46.0722 ], [ 51.5405, 46.0715 ], [ 51.5409, 46.0705 ], 
        [ 51.5413, 46.0691 ], [ 51.5416, 46.0683 ], [ 51.5418, 46.0677 ], 
        [ 51.5418, 46.0669 ], [ 51.5415, 46.0664 ], [ 51.5414, 46.0656 ], 
        [ 51.5413, 46.0647 ], [ 51.5414, 46.0639 ], [ 51.5418, 46.0640 ], 
        [ 51.5421, 46.0646 ], [ 51.5426, 46.0651 ], [ 51.5429, 46.0654 ], 
        [ 51.5434, 46.0649 ], [ 51.5440, 46.0653 ], [ 51.5443, 46.0650 ], 
        [ 51.5440, 46.0641 ], [ 51.5438, 46.0635 ], [ 51.5438, 46.0628 ], 
        [ 51.5444, 46.0627 ], [ 51.5449, 46.0626 ], [ 51.5448, 46.0619 ], 
        [ 51.5444, 46.0613 ], [ 51.5443, 46.0605 ], [ 51.5442, 46.0598 ], 
        [ 51.5445, 46.0593 ], [ 51.5445, 46.0587 ], [ 51.5446, 46.0581 ], 
        [ 51.5450, 46.0578 ], [ 51.5455, 46.0578 ], [ 51.5458, 46.0573 ], 
        [ 51.5459, 46.0565 ], [ 51.5460, 46.0551 ], [ 51.5464, 46.0545 ], 
        [ 51.5467, 46.0539 ], [ 51.5476, 46.0538 ], [ 51.5476, 46.0532 ], 
        [ 51.5469, 46.0530 ], [ 51.5463, 46.0529 ], [ 51.5455, 46.0526 ], 
        [ 51.5453, 46.0512 ], [ 51.5451, 46.0506 ], [ 51.5452, 46.0498 ], 
        [ 51.5452, 46.0490 ], [ 51.5449, 46.0481 ], [ 51.5445, 46.0475 ], 
        [ 51.5440, 46.0472 ], [ 51.5438, 46.0476 ], [ 51.5432, 46.0487 ] ] ],
    {
        // Содержимое балуна.
        balloonContent: "Рыбные места"
    }, {
        // Описываем опции геообъекта.
        // Фоновое изображение.
        fillImageHref: 'sources/placesImage/jurawli.jpg',
        // Тип заливки фоном.
        fillMethod: 'stretch',
        // Убираем видимость обводки.
        stroke: false
    }
);

// Добавляем многоугольник на карту.
myMap.geoObjects.add(myPolygon);
}


function setPlacemark(place){
   let myPlacemark = new ymaps.Placemark(place.coords,{},  {
        iconLayout: 'default#image',
        iconImageHref: place.metkaSrc,
        iconImageSize: [30, 40],
        iconImageOffset: [-5, -38]
    })
    return myPlacemark;
    
}