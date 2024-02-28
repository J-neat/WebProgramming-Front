div id="p"

let addButton = document.querySelector('#addButton')
let deleteButtom = document.querySelector('#deleteButton')

function addItem(){
    let text = prompt()
    let newDiv = document.createElement('div')
    newDiv.setAttribute('id', 'myDiv')
    newDiv.innerHTML(text);

    let prompt = document.querySelector('#p')
    parent.appendChild(newDiv);
}

function deleteItem(){
    let myDiv = document.querySelector('#myDiv')

    parent = myDiv.parentElement
    prompt.removeChilde(myDiv)
}
addButton.addEventListener('click', addItem)
deleteButton.addEventListener('click', deleteItem)