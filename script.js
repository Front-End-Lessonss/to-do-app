const inputBox = document.getElementsByClassName('input-box');
const addButton = document.getElementsByClassName('add-button');
const todoListContainer = document.getElementsByClassName('todo-lists');

addButton[0].addEventListener('click', addNewToDoList);

function addNewToDoList(e){
    e.preventDefault()
    const todoList = document.createElement('li');
    todoList.innerHTML = inputBox[0].value;
    const checkButton = document.createElement('button');
    checkButton.classList.add('check')
    checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    todoList.appendChild(checkButton);
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('cross');
    deleteButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    todoList.appendChild(deleteButton);
   todoListContainer[0].appendChild(todoList)
    inputBox[0].value = ''

}

// adding tick and deleting
todoListContainer[0].addEventListener('click', editTodoList)
function editTodoList (e){
    const  clickedElement = e.target;

    if (clickedElement.classList.contains('check')){
        clickedElement.parentElement.classList.toggle('done')
    }
    if (clickedElement.classList.contains('cross')){
        clickedElement.parentElement.classList.add('delete')
    }
}