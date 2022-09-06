function change(){
    var div = document.getElementById('box');
    var bgcolor = document.getElementById('bgcolor').value;
    div.style.backgroundColor = bgcolor;
    var width = document.getElementById('width').value;
    div.style.width = width + "px";
}
