let taskBar = document.getElementById("taskBar");
let addBtn = document.getElementById("addBtn");
let listItems = document.getElementById("listItems");


addBtn.addEventListener("click",addTask);


function addTask(){

    let input = taskBar.value.trim();

    if(input === ""){
        alert("please add a task");
        return;
    }

    let list = document.createElement("li");
    list.innerText = input;
    listItems.append(list);

    taskBar.value = "";

}