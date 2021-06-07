let addTodoButton = document.querySelector(".add-todo");
let todoInput = document.querySelector(".todo-input");



todoInput.addEventListener("keypress" , function(e){
    if(e.key == "Enter"){
        addTodo();
    }
});
addTodoButton.addEventListener( "click" , function(){
    addTodo();
});


// attach click event on addTodoButton
function addTodo(){
    let todoInputValue = todoInput.value;
    if(todoInputValue){
            console.log(todoInputValue);
            // it will empty the todoInput
            todoInput.value = "";
        }
}
    