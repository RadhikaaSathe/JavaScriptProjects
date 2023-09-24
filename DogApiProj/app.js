//dog Api Project
let url = "https://dog.ceo/api/breeds/image/random";

let button =  document.querySelector("button");

button.addEventListener("click",async()=>{
    let result = await getFact();
  let img = document.querySelector("img");
  img.setAttribute("src",result);
})

async function getFact() {
  try {
    let res = await axios.get(url);
    console.log(res.data.message);
    return res.data.message;
  } catch (e) {
    return "No data found";
  }
}
getFact();

