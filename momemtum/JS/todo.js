const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = toDoForm.querySelector("input");
let toDos =[];

const TODOS_KEY = "todos"

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDos) => toDos.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(sth){
    const li = document.createElement("li");
    li.id = sth.id;
    const span = document.createElement("span");
    span.innerText = sth.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
    
}

function submitCheckerToDo(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";

    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
    }
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", submitCheckerToDo);

const savedToDosInLocal = localStorage.getItem(TODOS_KEY);


if(savedToDosInLocal !== null){
    const parsedSavedToDos = JSON.parse(savedToDosInLocal);
    parsedSavedToDos.forEach(paintToDo);
    toDos = parsedSavedToDos;
}