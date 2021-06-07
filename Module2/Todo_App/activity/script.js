let addTodoButton = document.querySelector(".add-todo");
let todoInput = document.querySelector(".todo-input");



todoInput.addEventListener("keypress" , addTodo);


function addTodo(e){
    if(e.key == "Enter"){
        let todoInputValue = todoInput.value;
        console.log(todoInputValue);
        todoInput.value = "";
    }
}


// attach click event on addTodoButton
// addTodoButton.addEventListener( "click" , addTodo);
// function addTodo(e){
//     let todoInputValue = todoInput.value;
//     // falsy value => ""  , 0 , false , undefined , null
//     if(todoInputValue){
//         console.log(todoInputValue);

//         // it will empty the todoInput
//         todoInput.value = "";
//     }
// }