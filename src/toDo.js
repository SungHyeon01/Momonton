const toDoForm = document.querySelector(".js-submitToDo"),
    toDoInput = document.getElementById("toDoInput");
const toDos = document.querySelector(".js-todo");

const TODO_LS = "to do";

let toDoArray =[];

function deleteToDo(event) {
    const btnToDo = event.target;
    const todoLi = btnToDo.parentNode;
    toDos.removeChild(todoLi);
    const cleanToDo = toDoArray.filter(function (toToDo) {
      return toToDo.id !== parseInt(todoLi.id);
    });
  
    toDoArray = cleanToDo;
    saveToDo();
  }




function toDo(text) {
    const li = document.createElement("li");
    const delToDoBtn = document.createElement("button");
    delToDoBtn.innerText = "✖";
    delToDoBtn.addEventListener("click", deleteToDo);

    delToDoBtn.classList.add("delToDo");
    const spanToDo = document.createElement("span");
    const newIdToDo = toDoArray.length + 1;
    spanToDo.innerText = text;
    li.appendChild(delToDoBtn);
    li.appendChild(spanToDo);
    li.id = newIdToDo;
    toDos.appendChild(li);
    const toDoObj = {
    text: text,
    id: newIdToDo
    };
    toDoArray.push(toDoObj);
    saveToDo();
}

function saveToDo(){
 localStorage.setItem(TODO_LS, JSON.stringify(toDoArray))
}

function handleToDo(event){
    event.preventDefault();
    const currentToDoValue = toDoInput.value;
    toDo(currentToDoValue);
    toDoInput.value = "";
}

function loadToDo(){
    const loadedToDo = localStorage.getItem(TODO_LS);

    if(loadedToDo !== null){
        const parsedToDo =JSON.parse(loadedToDo);
        parsedToDo.forEach(function (toToDo){
            toDo(toToDo.text);
        });
    }
}


function init(){
    loadToDo();
    toDoForm.addEventListener("submit", handleToDo);
}

init();

