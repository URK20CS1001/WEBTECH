var car = null;
var timer = null;
function init(){
    car = document.getElementById('car');
    car.style.position = 'relative';
    car.style.left = '5px';   //initial position of car
}
function move(){
    car.style.left = parseInt(car.style.left)+2+'px';
    timer = setTimeout(move,1000);

}
function stop(){
    clearTimeout(timer);

}