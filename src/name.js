const nameForm = document.querySelector(".js-submitName"),
        nameInput = document.querySelector("input");
const nameText = document.querySelector(".js-name");

const nameDiv = document.querySelector(".submitTop");



const NAME_LS = "user name";

let userName = [];

function delName(event){
    const btn = event.target;
    const div = btn.parentNode;
    nameText.removeChild(div);
    
    const cleanName = userName.filter(function (toName) {
      return toName.id !== parseInt(div.id); 
        });
    userName = cleanName;
    saveName();
    nameForm.appendChild(nameInput);
    nameDiv.innerHTML="What's your name?"
}

function name(text){
    const div = document.createElement("div");
    const span =document.createElement("span");
    span.innerText = text;
    const delBtn = document.createElement("button");
    delBtn.innerText = "✖";
    delBtn.addEventListener("click", delName);
    delBtn.classList.add("delname");
    const newId = userName.length + 1;
    div.appendChild(span);
    div.appendChild(delBtn);
    div.id =newId;
    nameText.appendChild(div);
    const textObj ={
        text: text,
        id: newId
    };
    userName.push(textObj);
    if(textObj !== null){
     nameForm.removeChild(nameInput)
      nameDiv.innerHTML ="";
    }

    saveName();
}


function saveName() {
    localStorage.setItem(NAME_LS, JSON.stringify(userName));
  }

  function handleSubmit(event){
    event.preventDefault();
    const currentValue = nameInput.value;
    name(currentValue);
    nameInput.value = "";
}
     

function loadName(){
        const loadedName = localStorage.getItem(NAME_LS);
        if (loadedName !== null) {
          const parsedName = JSON.parse(loadedName);
          parsedName.forEach(function (toName) {
            name(toName.text);
          });
        }
}


function init(){
    loadName();
    nameForm.addEventListener("submit", handleSubmit);
}

init();