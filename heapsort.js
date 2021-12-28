
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
let array = [41,32,39,69,38,18,54,17,42,82,96,62,90,23,65,52,84,11,48,21,80,50,27,58,51,7,2,5,94,6,75,43,45,19,92,1,61,66,44,13,53,46,55,91,83,28,63,59,47,24,36,10,70,3,85,74,31,93,86,12,40,26,33,77,34,97,81,78,29,15,49,57,56,35,87,16,71,4,30,68,37,79,72,22,89,76,73,67,64,95,14,9];
let size = array.length;

function Swap(e1, e2) {   
    let temp = e1;
    e1=e2;  
    e2=temp;
}
// quick sort
let delay = ms => new Promise(resolve => setTimeout(resolve, ms));

async function heapify( arr, n, i){
	let largest =i;
	let l=i*2+1;
	let r= i*2+2;
	if(l<n && arr[l] > arr[largest]) largest =l;
	if(r<n && arr[r] > arr[largest]) largest =r;
    console.log(arr[largest]+'is laegest');
    draw(arr,largest,l,r,n);
    await delay(100);
	if(largest != i){
		// Swap(arr[largest],arr[i]);
        let temp = arr[largest]; 
            arr[largest]=arr[i];
            arr[i]=temp;
            console.log(arr[largest]+'large != i');

        await heapify(arr,n,largest);
        draw(arr,largest,l,r,n);
        await delay(100);
	}
}
async function buildheap( arr, n){
	for(let i=Math.floor(n/2-1);i>=0;i--)
	{await heapify(arr,n,i);
    console.log(i);}
}
async function heapsort(arr, n){
	await buildheap(arr,n);
	let heapsize=n;
	while (heapsize>1){
		// Swap(arr[0],arr[heapsize-1]);
        let temp = arr[0]; 
            arr[0]=arr[heapsize-1];
            arr[heapsize-1]=temp;
		heapsize--;
        
		await heapify(arr,heapsize,0);
	}
    console.log(arr)
}



function draw(arr,r,j,t,hs) { 
    context.clearRect(0, 0, canvas.width, canvas.height);
    for(let i = 0; i < arr.length; i++){
        
        if(i==t&&i==j || i==r&&i==t || i==r&&i==j){
            context.fillStyle = 'red';
            context.fillRect(10 + 12*i,canvas.height-20,6,-arr[i]*5);
        }
        else if(i == r){
            context.fillStyle = 'black';
            context.fillRect(10 + 12*i,canvas.height-20,6,-arr[i]*5);
        }
        else if(i == t && i < hs){
            context.fillStyle = 'blue';
            context.fillRect(10 + 12*i,canvas.height-20,6,-arr[i]*5);
        }
        else if(i == j && i < hs){
            context.fillStyle = 'yellow';
            context.fillRect(10 + 12*i,canvas.height-20,6,-arr[i]*5);
        }
        else 
        if(i >= hs){
            context.fillStyle = 'pink';
            context.fillRect(10 + 12*i,canvas.height-20,6,-arr[i]*5);
        }
        // else if(i >= Math.floor(size/2-1) && i < hs){
        //     context.fillStyle = 'yellow';
        //     context.fillRect(10 + 12*i,canvas.height-20,6,-arr[i]*5);
        // }        
        // else if(i >= Math.floor(size/4-1) && i < Math.floor(size/2-1)){
        //     context.fillStyle = 'blue';
        //     context.fillRect(10 + 12*i,canvas.height-20,6,-arr[i]*5);
        // }        
        // else if(i >= Math.floor(size/6-1) && i < Math.floor(size/4-1)){
        //     context.fillStyle = 'orange';
        //     context.fillRect(10 + 12*i,canvas.height-20,6,-arr[i]*5);
        // }        
        // else if(i >= Math.floor(size/8-1) && i < Math.floor(size/6-1)){
        //     context.fillStyle = 'blue';
        //     context.fillRect(10 + 12*i,canvas.height-20,6,-arr[i]*5);
        // }
        // else if(i >= Math.floor(size/10-1) && i < Math.floor(size/8-1)){
        //     context.fillStyle = 'orange';
        //     context.fillRect(10 + 12*i,canvas.height-20,6,-arr[i]*5);
        // }         
        else{
        context.fillStyle = 'green';
        context.fillRect(10 + 12*i,canvas.height-20,6,-arr[i]*5);
        }
    }
}


var CANVAS_WIDTH = 1180;
var CANVAS_HEIGHT = 645;
var canvas = document.querySelector('canvas')
var context = canvas.getContext('2d');
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
// context.fillStyle = 'red';

// let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80]; ,41,32,39,69,38,18,54,17,42,82,96,62,90,23,65,52,84,11,48,21,80,50,27,58,51,7,2,5,94,6,75,43,45,19,92,1,61,66,44,13,53,46,55,91,83,28,63,59,47,24,36,10,70,3,85,74,31,93,86,12,40,26,33,77,34,97,81,78,29,15,49,57,56,35,87,16,71,4,30,68,37,79,72,22,89,76,73,67,64,95,14,9

console.log(array);
heapsort(array,size);

