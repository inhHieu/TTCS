
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
var ctx = canvas.getctx('2d');
var main = document.getElementById('main');

canvas.height = 645;
canvas.width = 1185;
let array = [30,10,20,40]
let size = array.length;
function draw(array,t) { // Just simplified it for this demo. Nothing essential.
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(let i = 0; i < t; i++){
        ctx.fillRect(10 + 12*i,canvas.height-20,7,-array[i]*5); 
    }
}

function MergeSort(){
    let t =size;
    
        t=t/2;
        draw(array,t)
    
}

MergeSort(array);

// //object
// ctx.fillStyle = 'green';
//                             //100 = 10
// ctx.fillRect(100, 600, 122, -70);
// ctx.fillRect(272, 600, 122, -500);
// ctx.fillRect(444, 600, 122, -290);
// ctx.fillRect(616, 600, 122, -430);
// ctx.fillRect(788, 600, 122, -560);
// ctx.fillRect(960, 600, 122, -190);

// // ctx.clearRect(0, 0, canvas.width, canvas.height )
// //merge sort

// ctx.fillStyle = 'red';
// ctx.fillRect(100, 600, 122, -70);
// ctx.fillRect(272, 600, 122, -500);
// ctx.fillRect(444, 600, 122, -290);
// ctx.fillStyle = 'green';
// ctx.fillRect(616, 600, 122, -430);
// ctx.fillRect(788, 600, 122, -560);
// ctx.fillRect(960, 600, 122, -190);
