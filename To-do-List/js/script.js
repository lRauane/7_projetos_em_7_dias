// Seleção de elementos
const todoForm = document.querySelector("#Todo-forms")
const todoInput = document.querySelector("#todo-input")
const todoList = document.querySelector("#todo-list")
const editForm = document.querySelector("#edit-form")
const editInput = document.querySelector("#edit-input")
const cancelEditBTN = document.querySelector("#cancel-edit-btn")

let oldInputvalue;


// funções

// Função de criar as tarefas
const salvTodo =(text) =>{
  //  precisamos criar o elemento div com a classe já criada chamada "todo".
  const todo = document.createElement("div")
  todo.classList.add("todo")

  const todoTitle = document.createElement("h3")
  todoTitle.innerText = text
  todo.appendChild(todoTitle);

  // criamos o elemento botão da classe finalizar e adicionamos na div "todo", que cobre todo o elemento
  const donebtn = document.createElement("button")
  donebtn.classList.add("finish-todo");
  donebtn.innerHTML = '<i class="fa-solid fa-check"></i>'
  // "appendChild adiciona o elemento crado ao todo"
  todo.appendChild(donebtn)

  // criamos o elemento botão da classe editar e adicionamos na div "todo"
  const editBtn = document.createElement("button")
  editBtn.classList.add("edit-todo");
  editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
  todo.appendChild(editBtn)

  // criamos o elemento botão da classe remove e adicionamos na div "todo"
  const deletebtn = document.createElement("button")
  deletebtn.classList.add("remove-todo");
  deletebtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
  todo.appendChild(deletebtn)


  // finalizamos adicionando a classe "todo" ao elemento "todo-list" e criando uma nova tarefa
  todoList.appendChild(todo)

  //  limpar valor
  todoInput.value = ''
  todoInput.focus();
}

//  função para editar tarefa
const toggleForms = () =>{
  editForm.classList.toggle("hide");
  todoForm.classList.toggle("hide");
  todoList.classList.toggle("hide");
}

const updateTodo = (text) =>{
  const todos = document.querySelectorAll(".todo")
  todos.forEach((todo) =>{
    let todoTitle = todo.querySelector("h3")

    if(todoTitle.innerText === oldInputvalue){
      todoTitle.innerText = text
    }
  })

}


// eventos

// evento que quando o botão de adionar tarefa for acionado, ele pega o valor do input e manda para o to-do list
todoForm.addEventListener("submit", (e) =>{
  e.preventDefault()
  const inputValue = todoInput.value

  if(inputValue){
    // função de criar tarefa
    salvTodo(inputValue)
  } else{
    alert("Adicione uma tarefa...")
  }
});

// eventos de clique dos botões da lista de tarefa
document.addEventListener("click", (e) =>{
   const targetEl = e.target // refere-se a quando acionar o evento
  //  pega o elemento de classe proximo <no caso "done"
  const parentEl = targetEl.closest("div");
  let todoTitle;

  if(parentEl && parentEl.querySelector("h3")){
    todoTitle = parentEl.querySelector("h3").innerText;
  }

  // verifica se tem a classe "finish-todo"
  if(targetEl.classList.contains("finish-todo")){
    // se tiver, a classe done é acionada
    parentEl.classList.toggle("done")
  }

  if(targetEl.classList.contains("remove-todo")){
    parentEl.remove();
  }

  if(targetEl.classList.contains("edit-todo")){
    toggleForms()
    editInput.value = todoTitle
    oldInputvalue = todoTitle
  } 
})

// botão de cancelar edição
cancelEditBTN.addEventListener("click", (e) =>{
  e.preventDefault();
  toggleForms();
})

// salvar edição
editForm.addEventListener("submit", (e) =>{
  e.preventDefault()

  const editInputValue = editInput.value

  if(editInputValue){
    // atualizar
    updateTodo(editInputValue)
  }

  toggleForms()
})


// utilizando dados do LocalStorage
