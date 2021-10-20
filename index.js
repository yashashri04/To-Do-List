if(localStorage.getItem("todo")===null){
    localStorage.setItem("todo",JSON.stringify([]));
}

showList();
const addBtn=document.getElementById('addBtn');
addBtn.addEventListener('click',()=>{
    const input=document.getElementById('input');
    let todo = localStorage.getItem('todo');
    if (todo == null) {
        todoObj = [];
    }
    else {
        todoObj = JSON.parse(todo);
    }
    if(input.value.trim().length!=0){
        todoObj.push(input.value);
        localStorage.setItem('todo', JSON.stringify(todoObj));
        input.value = "";
        document.getElementById('validation').style.display='none';
        showList();
    }
    else{
        document.getElementById('validation').style.display='block';
    }
    })

function showList() {
    let list = localStorage.getItem("todo");
    if (list == null) {
        listObj = [];
    }
    else {
        listObj = JSON.parse(list);
    }
    let html = "";
    listObj.forEach(function (element, index) {
        html += ` <div class="list-ele">
         ${element}
         <div>
                    <button id=${index} class="actionBtn" onclick="deleteNote(this.id)"><i class="bi bi-archive" style="color:red"></i></button>
                    <button id=${index}  class="actionBtn" onclick="editNote(this.id)"  data-bs-toggle="modal" data-bs-target="#editModal"><i class="bi bi-pencil-square" style="color:green"></i></button>
                 </div>
      </div>`;
    })
    let listEle = document.getElementById('list-item');
    if (list.length != 0) {
        listEle.innerHTML = html;
    }
    else {
        listEle.innerHTML = `<li>Nothing to show</li>`;
    }
}

function deleteNote(id) {
    let list = localStorage.getItem("todo");
    if (list == null) {
        listObj = [];
    }
    else {
        listObj = JSON.parse(list);
    }
    listObj.splice(id, 1);
    localStorage.setItem("todo", JSON.stringify(listObj));
    showList();
}

function  editNote(id) {
    let list = localStorage.getItem("todo");
    if (list == null) {
        listObj = [];
    }
    else {
        listObj = JSON.parse(list);
    }
    const modalInput=document.getElementById('modalInput');
    modalInput.value=listObj[id];
    
    const saveChangesBtn=document.getElementById('saveChangesBtn');

    saveChangesBtn.addEventListener('click',()=>{
        if(modalInput.value.trim().length!=0){
            listObj[id]=modalInput.value;
            localStorage.setItem("todo", JSON.stringify(listObj));
            showList();
        }
        
    })

    
}

