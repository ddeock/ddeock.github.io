const todoForm = document.querySelector("#todo_form");
const todoInput = document.querySelector("#todo_form input");
const todoUl = document.querySelector("#todo_ul");
const ITEM = "item"
let todoArr = [];

function todoSet(){
    localStorage.setItem(ITEM , JSON.stringify(todoArr))
}

function todoDelete(event){
    const li = event.target.parentNode;
    li.remove();
    todoArr = todoArr.filter((item) => item.id !== parseInt(li.id))
    todoSet();
}

function todoSave(todoValue){
    const li = document.createElement("li");
    const strong = document.createElement("strong");
    strong.innerText = "•";
    const span = document.createElement("span");
    span.innerText = todoValue.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    li.appendChild(strong);
    li.appendChild(span);
    li.appendChild(button);
    todoUl.appendChild(li);
    li.id = todoValue.id;
    button.addEventListener("click", todoDelete);
}

function todoSubmit(event){
    event.preventDefault();
    const todoValue = todoInput.value;
    todoInput.value = "";
    const todoObj = {
        text : todoValue,
        id : Date.now(),
    }
    todoArr.push(todoObj)
    todoSave(todoObj);
    todoSet();
}

document.addEventListener("submit", todoSubmit);
const todoGet = localStorage.getItem(ITEM);

if(todoGet !== null){
    const parse = JSON.parse(todoGet);
    parse.forEach(todoSave);
}