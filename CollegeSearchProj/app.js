let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener("click",async()=>{

    let country = document.querySelector("input").value;
    console.log(country);
    let result = await getCol(country);
    let ul = document.querySelector("#list");
    ul.innerText="";
    country.value="";
    for(r of result){
   
    
    let li = document.createElement("li");
    li.innerText=r.name;
    ul.appendChild(li);
    

    }
})

async function getCol(country){
 try{
    let result = await axios.get(url+country);
    return result.data;
 }catch{
    return [];
 }

}
