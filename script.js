const input = document.getElementById('input');
const containerLista = document.getElementById('containerLista');

function adicionarTarefa() {
  if(input.value === '') {
    alert('Digite uma tarefa!');
    return;
  }
  else {
    let li = document.createElement('li');
    li.innerHTML = input.value;
    containerLista.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML = 'X';
    li.appendChild(span);
  }
  input.value = '';
  salvarLista();
}

containerLista.addEventListener('click', function(e) {
  if(e.target.tagName === 'SPAN') {
    e.target.parentElement.remove();
    salvarLista();
  }
  else {
    e.target.classList.toggle('marcado');
    salvarLista();
  }
});

function salvarLista() {
  localStorage.setItem('tarefas', containerLista.innerHTML);
}

function mostrarLista() {
  if(localStorage.getItem('tarefas')) {
    containerLista.innerHTML = localStorage.getItem('tarefas');
  }
}
mostrarLista();