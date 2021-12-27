
var Nav = document.getElementById("mySidebar");
function openNav() {
    Nav.style.width = "250px";
}  
function closeNav() {
    Nav.style.width = "80px";
}
function ToggleNav(){
    if( Nav.style.width == "80px")
        openNav();
    else
        closeNav()
}


var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var main = document.getElementById('main');

canvas.height = 645;
canvas.width = 1185;

//object
ctx.fillStyle = 'green';
                            //100 = 10
ctx.fillRect(100, 600, 122, -70);
ctx.fillRect(272, 600, 122, -500);
ctx.fillRect(444, 600, 122, -290);
ctx.fillRect(616, 600, 122, -430);
ctx.fillRect(788, 600, 122, -560);
ctx.fillRect(960, 600, 122, -190);

// ctx.clearRect(0, 0, canvas.width, canvas.height )
//merge sort

ctx.fillStyle = 'red';
ctx.fillRect(100, 600, 122, -70);
ctx.fillRect(272, 600, 122, -500);
ctx.fillRect(444, 600, 122, -290);
ctx.fillStyle = 'green';
ctx.fillRect(616, 600, 122, -430);
ctx.fillRect(788, 600, 122, -560);
ctx.fillRect(960, 600, 122, -190);
