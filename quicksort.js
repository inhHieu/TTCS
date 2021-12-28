
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


function Swap(e1, e2) {   
    let temp = e1;
    e1=e2;  
    e2=temp;
}


// quick sort
let delay = ms => new Promise(resolve => setTimeout(resolve, ms));
// Make the main function async
async function quick_Sort(arr,p,r){
    // draw(arr,r,i,t);
    if (p<r) {	    
        let t= p;
        let i			     // B r?ng 
           for(i = p; i < r; i++)
            if (arr[i]>= arr[r])
            {  
            //    Swap(arr[i], arr[t]); 

                let temp = arr[t];
                    arr[t]=arr[i];  
                    arr[i]=temp;
                    draw(arr,r,i,t);
                    await delay(100);
                // for(let s = i; s>t;s--){
                //     let temp = arr[s];
                //     arr[s]=arr[i];  
                //     arr[i]=temp;
                //     draw(arr,r,s+1,t);
                //     await delay(0);
                // }


                t++;
                draw(arr,r,i,t);
                await delay(100);
            }
            let temp = arr[t]; 
                arr[t]=arr[r];
                arr[r]=temp;
                draw(arr,r,i,t);
                await delay(10);         
           await quick_Sort(arr, p, t-1); 
           await quick_Sort(arr, t+1, r);
       }
    return arr;
}


function draw(arr,r,j,t) { // Just simplified it for this demo. Nothing essential.
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
        else if( i == t){
            context.fillStyle = 'blue';
            context.fillRect(10 + 12*i,canvas.height-20,6,-arr[i]*5);
        }
        else if(i == j){
            context.fillStyle = 'yellow';
            context.fillRect(10 + 12*i,canvas.height-20,6,-arr[i]*5);
        }
        
        else{
        context.fillStyle = 'green';
        context.fillRect(10 + 12*i,canvas.height-20,6,-arr[i]*5);
        }
    }
}
// function draw(array) { // Just simplified it for this demo. Nothing essential.
//     context.clearRect(0, 0, canvas.width, canvas.height);
//     for(let i = 0; i < array.length; i++){
        
//         context.fillRect(10 + 12*i,canvas.height-20,6,-array[i]*5);
//     }
// }

var CANVAS_WIDTH = 1180;
var CANVAS_HEIGHT = 645;
var canvas = document.querySelector('canvas')
var context = canvas.getContext('2d');
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
// context.fillStyle = 'red';

// let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80];
let array = [25,88,20,60,8,41,32,39,69,38,18,54,17,42,82,96,62,90,23,65,52,84,11,48,21,80,50,27,58,51,7,2,5,94,6,75,43,45,19,92,1,61,66,44,13,53,46,55,91,83,28,63,59,47,24,36,10,70,3,85,74,31,93,86,12,40,26,33,77,34,97,81,78,29,15,49,57,56,35,87,16,71,4,30,68,37,79,72,22,89,76,73,67,64,95,14,9];
let size = array.length;
quick_Sort(array,0,size-1);











// //merge sort
// // Make the main function async
// async function  Merge( arr, l, mid , r)
// {
//     let size = array.length;
// 	let b=[];						//tao mang phu de luu phan tu duoc sap xep
// 	let i=l,j=mid+1,k=l;
// 	while((i<=mid)&&(j<=r))			//sap xep phan tu
// 	{
// 		if(arr[i]<=arr[j]) 
// 			b[k++]=arr[i++];
// 		else
// 			b[k++]=arr[j++];
//             draw(array);
//                await delay(0);	
// 	}
// 	for(;i<=mid;i++) b[k++]=arr[i];	//nhap phan tu con du neu co
// 	for(;j<=r;j++) b[k++]=arr[j];
// //-----------						 chuyen sang mang chinh
// 	for(k=l;k<=r;k++) arr[k]=b[k];
// }

// function MergeSort( arr, l, r)
// {
// 	if(l<r)
// 	{
// 		let mid=(l+r)/2;
//         color(arr,mid);
// 		MergeSort(arr,l,mid);
// 		// MergeSort(arr,mid+1,r);
// 		// Merge(arr,l,mid,r);
// 	}

// }


// function color(arr,mid) { // Just simplified it for this demo. Nothing essential.
//     context.clearRect(0, 0, canvas.width, canvas.height);
//     for(let i = 0; i < mid; i++){
//         context.fillStyle = 'rgb(' + Math.floor(255 - 2 * mid+1) + ', ' +
//         Math.floor(255 - 20 * mid+1) + ', 0)';
//         context.fillRect(10 + 22*i,canvas.height-20,12,-array[i]*5);
        
//     }console.log(context.fillStyle)
//     for(let i = mid; i < arr.length; i++){
//         context.fillStyle = 'rgb(' + Math.floor(255 - 20 * mid-1) + ', ' +
//         Math.floor(255 - 2 * mid+1) + ', 0)';
//         context.fillRect(10 + 22*i,canvas.height-20,12,-array[i]*5);
//     }
// }
