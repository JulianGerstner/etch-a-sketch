const container = document.querySelector(".container");
let gridSize = 5;
function createGrid(size){
const itemSize= 100 / gridSize;
container.innerHTML = ''
for(i=0;i<gridSize*gridSize;i++){
    
    const div = document.createElement("div");
    div.style.width = itemSize + "%";
    div.style.height = itemSize + "%";
    container.appendChild(div);
    div.addEventListener('mouseenter', ()=>{
    div.style.backgroundColor = "black";
})
}
}
createGrid(gridSize);
const btn = document.querySelector("#btn");
btn.addEventListener("click", ()=>{
    gridSize=parseInt(prompt("Grid size:"));
    createGrid(gridSize);
})

