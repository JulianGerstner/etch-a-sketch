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
        const r = Math.floor(Math.random()*256);
        const g = Math.floor(Math.random()*256);
        const b = Math.floor(Math.random()*256);
    div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
})
}
}
createGrid(gridSize);
const btn = document.querySelector("#btn");
btn.addEventListener("click", ()=>{
    do{
    gridSize=parseInt(prompt("Grid size(1-100):"));
    if(gridSize>100 || gridSize<1 || isNaN(gridSize)){
        alert("Insert a valid value");
    }
    }while(gridSize<1 || gridSize>100 || isNaN(gridSize));
    createGrid(gridSize);
})

