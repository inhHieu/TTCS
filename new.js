
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





// quick sort
let delay = ms => new Promise(resolve => setTimeout(resolve, ms));
// Make the main function async
async function quick_Sort(arr,p,r){
    draw(array);
    if (p<r) {	    
        let t= p;			     // B r?ng 
           for(let i= p; i<= r-1; i++)
            if (arr[i]<= arr[r])
            {  
            //    Swap(arr[t], arr[i]); 
               let temp = arr[t]; arr[t]=arr[i];arr[i]=temp;
               t++;
               draw(array);
               await delay(20);		          // B m? r?ng	
            }
            let temp = arr[t]; arr[t]=arr[r];arr[r]=temp;

            
            
            quick_Sort(arr, p, t-1); 		  // S?p x?p B
            quick_Sort(arr, t+1, r);		   // S?p x?p C
       }
    return arr;
}


//merge sort
let delay = ms => new Promise(resolve => setTimeout(resolve, ms));
// Make the main function async
async function  Merge( arr, l, mid , r)
{
    let size = array.length;
	let b=[];						//tao mang phu de luu phan tu duoc sap xep
	let i=l,j=mid+1,k=l;
	while((i<=mid)&&(j<=r))			//sap xep phan tu
	{
		if(arr[i]<=arr[j]) 
			b[k++]=arr[i++];
		else
			b[k++]=arr[j++];
	}
	for(;i<=mid;i++) {b[k++]=arr[i];}	//nhap phan tu con du neu co
	for(;j<=r;j++) {b[k++]=arr[j];}
//-----------						 chuyen sang mang chinh
	for(k=l;k<=r;k++) arr[k]=b[k];
}

void MergeSort( arr, l, r)
{
	if(l<r)
	{
		let mid=(l+r)/2;
		MergeSort(arr,l,mid);
		MergeSort(arr,mid+1,r);
		Merge(arr,l,mid,r);
	}

}










function draw(array) { // Just simplified it for this demo. Nothing essential.
    context.clearRect(0, 0, canvas.width, canvas.height);
    for(let i = 0; i < array.length; i++){
        context.fillRect(10 + 12*i,canvas.height-20,7,-array[i]*5);
    }
}

var CANVAS_WIDTH = 1180;
var CANVAS_HEIGHT = 645;
var canvas = document.querySelector('canvas')
var context = canvas.getContext('2d');
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
context.fillStyle = 'red';

let array = [35,73,49,38,51,36,46,15,57,59,66,34,2,32,31,40,26,77,25,17,23,72,71,3,10,70,16,19,45,22,18,39,42,79,20,47,7,41,75,60,30,28,68,11,33,8,13,74,14,43,12,58,69,54,53,24,64,44,6,4,56,50,63,48,29,9,76,5,27,21,37,67,1,61,65,55,52,80,62,78];
let size = array.length;
quick_Sort(array,0,size-1);
//35,73,49,38,51,36,46,15,57,59,66,34,2,32,31,40,26,77,25,17,23,72,71,3,10,70,16,19,45,22,18,39,42,79,20,47,7,41,75,60,30,28,68,11,33,8,13,74,14,43,12,58,69,54,53,24,64,44,6,4,56,50,63,48,29,9,76,5,27,21,37,67,1,61,65,55,52,80,62,78
