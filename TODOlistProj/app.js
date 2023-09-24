let input= document.querySelector("input");
let add = document.querySelector("button");
let li = document.querySelector("li");
let ul = document.querySelector("ul");

add.addEventListener("click",function(){
let newli = document.createElement("li");
let delbtn= document.createElement("button");
newli.innerText= input.value;
delbtn.innerText="delete";
delbtn.classList.add("del");
ul.appendChild(newli);
newli.append(delbtn);
input.value ="";
});

ul.addEventListener("click",function(event){
if(event.target.nodeName =="BUTTON"){
    let par = event.target.parentElement;
    par.remove();
}


});
