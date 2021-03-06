// ----------------------------------------
// -----------------NAV--------------------
var Nav = document.getElementById("mySidebar");
var span = document.querySelectorAll("span");
function openNav() {
    Nav.style.width = "250px";
    for(let i = 0; i < span.length; i++)
    span[i].style.display = "inline-block";
}  
function closeNav() {
    Nav.style.width = "80px";
    for(let i = 0; i < span.length; i++)
    span[i].style.display = "none";
}
function ToggleNav(){
    if( Nav.style.width == "80px")
        openNav();
    else
        closeNav()
}
// ----------------------------------------
// --------------Sort Algo-----------------

function Swap(e1, e2) {   
    let temp = e1;
    e1=e2;  
    e2=temp;
}

let delay = ms => new Promise(resolve => setTimeout(resolve, ms));

var CANVAS_WIDTH = 1180;
var CANVAS_HEIGHT = 645;
var canvas = document.querySelector('canvas')
var context = canvas.getContext('2d');
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
// context.fillStyle = '#ff3503';

// let array = [25,88,20,60,8,41,32,39,69,38,18,54,17,42,82,96,62,90,23,65,52,84,11,48,21,80,50,27,58,51,7,2,5,94,6,75,43,45,19,92,1,61,66,44,13,53,46,55,91,83,28,63,59,47,24,36,10,70,3,85,74,31,93,86,12,40,26,33,77,34,97,81,78,29,15,49,57,56,35,87,16,71,4,30,68,37,79,72,22,89,76,73,67,64,95,14,9];
// let array_clone = [25,88,20,60,8,41,32,39,69,38,18,54,17,42,82,96,62,90,23,65,52,84,11,48,21,80,50,27,58,51,7,2,5,94,6,75,43,45,19,92,1,61,66,44,13,53,46,55,91,83,28,63,59,47,24,36,10,70,3,85,74,31,93,86,12,40,26,33,77,34,97,81,78,29,15,49,57,56,35,87,16,71,4,30,68,37,79,72,22,89,76,73,67,64,95,14,9];
let array = [44,29,16,20,26,92,12,95,33,62,26,73,88,53];
let array_clone = [44,29,16,20,26,92,12,95,33,62,26,73,88,53];
let size = array.length;



function Completeraw(arr,j) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "#111";
    context.fillRect(0, 0, canvas.width, canvas.height);
    for(let i = 0; i < arr.length; i++){ 
        if(i <= j){
            context.fillStyle = '#49E303';
            context.fillRect(200 + 62*i,canvas.height-20,40,-arr[i]*5);
        }
        else{
            context.fillStyle = '#59f0ff';
            context.fillRect(200 + 62*i,canvas.height-20,40,-arr[i]*5);
        }
    }
}
function CloneDraw(arr,hex) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "#111";
    context.fillRect(0, 0, canvas.width, canvas.height);
    for(let i = 0; i < arr.length; i++){            
        context.fillStyle = ""+hex;
        context.fillRect(200 + 62*i,canvas.height-20,40,-arr[i]*5);
            // x, y, witt, height
    }
}
CloneDraw(array_clone,"#59f0ff");
// ------------------------------------------
// --------------Quick Sort------------------

async function QuickSort(arr,p,r){
    if (p<r) {	    
        let t= p;
        let i			  
           for(i = p; i < r; i++){
                QuickDraw(arr,r,i,t);
                await delay(1000);
                if (arr[i]<= arr[r]){  
                let temp = arr[t];
                    arr[t]=arr[i];  
                    arr[i]=temp;
                t++;               
            } 
           }            
            let temp = arr[t]; 
                arr[t]=arr[r];
                arr[r]=temp;
                QuickDraw(arr,r,i,t);
                await delay(700);         
           await QuickSort(arr, p, t-1); 
           await QuickSort(arr, t+1, r);
       }
}


function QuickDraw(arr,r,j,t) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "#111";
    context.fillRect(0, 0, canvas.width, canvas.height);
    for(let i = 0; i < arr.length; i++){
        
        if(i==t&&i==j || i==r&&i==t || i==r&&i==j){
            context.fillStyle = '#ff3503';
            context.fillRect(200 + 62*i,canvas.height-20,40,-arr[i]*5);
        }
        else if(i == r){
            context.fillStyle = '#FF1493';
            context.fillRect(200 + 62*i,canvas.height-20,40,-arr[i]*5);
        }
        else if( i == t){
            context.fillStyle = 'red';
            context.fillRect(200 + 62*i,canvas.height-20,40,-arr[i]*5);
        }
        else if(i == j){
            context.fillStyle = '#FEEE00';
            context.fillRect(200 + 62*i,canvas.height-20,40,-arr[i]*5);
        }
        
        else{
        context.fillStyle = '#59f0ff';
        context.fillRect(200 + 62*i,canvas.height-20,40,-arr[i]*5);
        }
    }
}

 
let QS_btn = document.getElementById("QS");
let QList = document.getElementById("QList");
async function QS(){
    QList.style.display="block";
    MList.style.display="none";
    HList.style.display="none";
    CloneDraw(array,"#59f0ff");
    await delay(2000)
    await QuickSort(array,0,size-1);
    // CloneDraw(array,"#49E303");
    
    for(let i=0; i < size; i++){
        Completeraw(array,i);
        await delay(100);
    }
    for(let i=0; i < size; i++){
        array[i] = array_clone[i];
    }
}


// ------------------------------------------
// --------------Merge Sort------------------



async function Merge(arr,l,mid,r){
    let b=[];						//tao mang phu de luu phan tu duoc sap xep
	let i=l,j=mid+1,k=l;
	while((i<=mid)&&(j<=r))			//sap xep phan tu
	{
		if(arr[i]<=arr[j]) {
            b[k]=arr[i];
            k++;i++;
        }
		else{
            b[k]=arr[j];
            k++;j++;
        }
	}
	for(;i<=mid;i++) {b[k++]=arr[i];}	//nhap phan tu con du neu co
	for(;j<=r;j++) {b[k++]=arr[j];}

	for(e=l;e<=r;e++) {                 //chuyen sang mang chinh
        arr[e]=b[e];    
        console.log(k,i,j,l);
        MergeDraw(arr,k,i,j,l);
        await delay(700);
    }
}
async function MergeSort( arr, l, r){
	if(l<r)
	{
		let mid=Math.floor((l+r)/2);
		await MergeSort(arr,l,mid);
		await MergeSort(arr,mid+1,r);
		await Merge(arr,l,mid,r);
	}
}


function MergeDraw(arr,k,e,j,l){ 
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "#111";
    context.fillRect(0, 0, canvas.width, canvas.height);
    for(let i = 0; i < arr.length; i++){        
        if(i<k && i != e && i != j && i < l){
            context.fillStyle = '#49E303';
            context.fillRect(200 + 62*i,canvas.height-20,40,-arr[i]*5);
        }
        else if(  i >= l && i <k){
            context.fillStyle = '#ff3503';
            context.fillRect(200 + 62*i,canvas.height-20,40,-arr[i]*5);
        }
        else if( i >= l && i <k){
            context.fillStyle = '#ff3503';
            context.fillRect(200 + 62*i,canvas.height-20,40,-arr[i]*5);
        }        
        else{
        context.fillStyle = '#59f0ff';
        context.fillRect(200 + 62*i,canvas.height-20,40,-arr[i]*5);
        }
    }
}


let MS_btn = document.getElementById("MS");
let MList = document.getElementById("MList");
async function MS(){
    MList.style.display="block";
    HList.style.display="none";
    QList.style.display="none";
    CloneDraw(array,"#59f0ff");
    await delay(2000)
    await MergeSort(array,0,size-1);
    for(let i=0; i < size; i++){
        Completeraw(array,i);
        await delay(100);
    }
    for(let i=0; i < size; i++){
        array[i] = array_clone[i];
    }
}


// ------------------------------------------
// --------------Heap Sort-------------------



async function Heapify( arr, n, i){
	let largest =i;
	let l=i*2+1;
	let r= i*2+2;
    let largestTemp = largest;
    HeapDraw(arr,largest,l,r,n,largestTemp);
    await delay(2000);
	if(l<n && arr[l] > arr[largest]) largest =l;
	if(r<n && arr[r] > arr[largest]) largest =r;
    HeapDraw(arr,largest,l,r,n,largestTemp);
    await delay(2000);
	if(largest != i){
        let temp = arr[largest]; 
            arr[largest]=arr[i];
            arr[i]=temp;
            // console.log(arr[largest]+'large != i');
        // HeapDraw(arr,largest,l,r,n,largestTemp);
        // await delay(1000);
        await Heapify(arr,n,largest);
	}
}
async function BuildHeap( arr, n){
	for(let i=Math.floor(n/2-1);i>=0;i--)
	{await Heapify(arr,n,i);
    console.log(i);}
}
async function HeapSort(arr, n){
	await BuildHeap(arr,n);
	let heapsize=n;
	while (heapsize>1){
        let temp = arr[0]; 
            arr[0]=arr[heapsize-1];
            arr[heapsize-1]=temp;
		heapsize--;        
		await Heapify(arr,heapsize,0);
	}
    console.log(arr)
}


//HeapDraw(arr,largest,l,r,n);
function HeapDraw(arr,largest,l,r,hs,largestTemp) { 
    let root =0;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "#111";
    context.fillRect(0, 0, canvas.width, canvas.height);
    for(let i = 0; i < arr.length; i++){
        
        if(i == root ){
            context.fillStyle = 'red';
            context.fillRect(200 + 62*i,canvas.height-20,40,-arr[i]*5);
        }else if( i> root &&  i <= root*2+2 ){
            context.fillStyle = 'yellow';
            context.fillRect(200 + 62*i,canvas.height-20,40,-arr[i]*5);
        }else if( i> root*2+2 &&  i <= (root*2+2)*2+2 ){
            context.fillStyle = 'blue';
            context.fillRect(200 + 62*i,canvas.height-20,40,-arr[i]*5);
        }else if( i> (root*2+2)*2+2 &&  i <= ((root*2+2)*2+2)*2+2 ){
            context.fillStyle = 'green';
            context.fillRect(200 + 62*i,canvas.height-20,40,-arr[i]*5);
        }
//-------------------------
        if(i == largest){
            context.fillStyle = '#FF1493';
            context.fillRect(200 + 62*i,canvas.height-20,40,-arr[i]*5);
        }
        else if(i == largestTemp){
            context.fillStyle = '#59f0ff';
            context.fillRect(200 + 62*i,canvas.height-20,40,-arr[i]*5);           
        }
        else if(i == r && i < hs){
            context.fillStyle = '#59f0ff';
            context.fillRect(200 + 62*i,canvas.height-20,40,-arr[i]*5);
        }
        else if(i == l && i < hs){
            context.fillStyle = '#59f0ff';
            context.fillRect(200 + 62*i,canvas.height-20,40,-arr[i]*5);
        }
        else 
        if(i >= hs){
            context.fillStyle = '#49E303';
            context.fillRect(200 + 62*i,canvas.height-20,40,-arr[i]*5);
        }
    }
}


let HS_btn = document.getElementById("HS");
let HList = document.getElementById("HList");
async function HS(){    
    HList.style.display="block";
    MList.style.display="none";
    QList.style.display="none";
    CloneDraw(array,"#59f0ff");
    await delay(2000);
    await HeapSort(array,size);
    for(let i=0; i < size; i++){
        Completeraw(array,i);
        await delay(100);
    }
    for(let i=0; i < size; i++){
        array[i] = array_clone[i];
    }
}
// ------------------------------------------
// ------------------------------------------

function running(){
    let btn =document.querySelectorAll(".btn");
    for( let i = 0; i < btn.length; i++){
        btn[i].classList.remove("running");
    }
        btn[i].classList.add("running");
}


// ------------------------------------------
// -------------Bootstrap--------------------

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// ------------------------------------------
// ----------------Pause---------------------
function pause(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }
function play(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

// ------------------------------------------
// ---------------READTXT--------------------

function getarray(){
    var x = document.getElementById("input").value;    
    array = array_clone  = $('#input').val().split(",");
    CloneDraw(array_clone,"#59f0ff");
    console.log(x)
    console.log(array+"  array")
}


