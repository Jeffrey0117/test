//Selectors
const todoInput=document.querySelector('.todo-input');
const todoBtn=document.querySelector('.todo-btn');
const todoList=document.querySelector('.todo-list');
const selecttodo=document.querySelector('#todo-select');

//Eventlisteners

todoBtn.addEventListener('click',addtodo);
todoList.addEventListener('click',DeleteCheck);
selecttodo.addEventListener('click',Select);

//Functions

function addtodo(event){
    if(todoInput.value===""){event.preventDefault();alert("請做事好嗎!")}
    else{
    event.preventDefault();
    //toto Div
    const TodoDiv=document.createElement('div');
    TodoDiv.className="todo";
    //todo Li
    const NewTodo=document.createElement("li");
    NewTodo.innerText=todoInput.value;
    todoInput.value="";
    NewTodo.classList.add('todo-item');
    TodoDiv.appendChild(NewTodo);
    //CHECKED MARK BUTTON
    const CompleteButton=document.createElement("button");
    CompleteButton.innerHTML='<i class="fas fa-check"></i>'
    CompleteButton.classList.add('Complete-Button');
    //CHECKED delete BUTTON
    const DeleteButton=document.createElement("button");
    DeleteButton.innerHTML='<i class="fa fa-trash"></i>';
    DeleteButton.classList.add('Delete-Button');
    //APPEND
    todoList.appendChild(TodoDiv);
    TodoDiv.appendChild(CompleteButton);
    TodoDiv.appendChild(DeleteButton);}
}

function DeleteCheck(e){
    item=e.target;
    
    if(item.classList[0]==="Delete-Button"){
    const todo=item.parentElement;
    todo.classList.add("fall");
    todo.addEventListener('transitionend',function(){
        todo.remove();
    })
   
    }

    if(item.classList[0]==="Complete-Button"){
        const todo=item.parentElement;
        todo.classList.toggle('todo-completed')
    }
}


function Select(e){
    const todos=todoList.childNodes;
    if(todos[0].nodeName=='#text'){
        todos=todos[0].remove();}
    todos.forEach(function(element){
        switch(e.target.value){
            case "all":
                element.style.display="flex";
                break;
            case "Completed":
                if(element.classList.contains("todo-completed")){
                    element.style.display="flex";
                }else{
                    element.style.display="none" ; 
                }
                break;
            case "Uncompleted":
                if(!element.classList.contains("todo-completed")){
                    element.style.display="flex";
                }else{
                    element.style.display="none" ; 
                }
                break;
        }
    })
}

