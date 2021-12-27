for(i=0;i<=99;i++){
    var obj = document.createElement("object");
    but.innerHTML=""+i;
    but.setAttribute("class","square");
    but.setAttribute("id","button"+i);
    document.getElementById("table").appendChild(but);
}