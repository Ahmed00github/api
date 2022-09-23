// let some=document.querySelector("#main_container");
// fetch("https://www.breakingbadapi.com/api/")
// .then(function(response){
//     //console.log(respons.json);
//     return response.json();
// })
// .then(function(data){
//     console.log(data);
//     some.innerHTML=data;
// })


let container       = document.querySelector(".container");
let h2              = document.querySelector(".h2");
let inp             = document.querySelector(".inp");
let sel             = document.querySelector(".sel");
let img             = document.querySelector(".img");
async function _api_(){
    const response = await fetch("https://www.breakingbadapi.com/api/characters");
    const data     = await response.json();
    console.log(data);
    let info = '';
    for(let i=0;i<data.length;i++)
    {
        info += 
        `
        <option value="${i}">${data[i].name}</option>
        `;
    }
    sel.innerHTML += info;
}
_api_();
async function getelement(i)
{
    const response = await fetch("https://www.breakingbadapi.com/api/characters");
    const data     = await response.json();
    h2.innerHTML=data[i].name;
    img.src=data[i].img;
}
window.onload = async function() {
    const response = await fetch("https://www.breakingbadapi.com/api/characters");
    const data     = await response.json();
    h2.innerHTML=data[0].name;
    img.src=data[0].img;
}