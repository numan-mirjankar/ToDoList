const input = document.getElementById("text");
const disp = document.getElementById("task");

function add() {
    if (input.value.trim() === "") {
        alert("Write something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        
        
        let removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.onclick = function() {
            disp.removeChild(li);
        };
        
        
        let completeBtn = document.createElement("button");
        completeBtn.textContent = "Complete";
        completeBtn.onclick = function() {
            li.classList.toggle("completed");
        };
        
       
        li.appendChild(completeBtn);
        li.appendChild(removeBtn);
        
        disp.appendChild(li);
        input.value = ""; 
        savedata();
    }
}

function clearAll() {
    disp.innerHTML = ""; 
}
function savedata(){
    localStorage.setItem("data",task.innerHTML)
}
function showtask(){
    task.innerHTML=localStorage.getItem("data");
}
showtask();