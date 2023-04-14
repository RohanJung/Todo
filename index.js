
// function addVal(){
//     const val = document.getElementById('todo-input').value
//     document.getElementById('todo-list').innerText =val
//     document.getElementById('todo-input').value = '';

// }

function addVal() {
    const val = document.getElementById('todo-input').value;
    const todoList = document.getElementById('todo-list');

    const li = document.createElement('li');
    li.innerText = val;
  

    todoList.appendChild(li);
  

    document.getElementById('todo-input').value = '';
  }
  
