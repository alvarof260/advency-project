const gifts = ["Trabajo", "Promocionar Materias", "Computadora"];
const container = document.querySelector(".container-list")
const list = document.querySelector(".gifts")

console.dir(container)

for(const gift of gifts){
    let li = document.createElement("li")
    li.innerText = gift
    list.append(li)
}
