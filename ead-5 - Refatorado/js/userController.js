const usuarios = [];

function adicionarUsuario(nome, email) {
  usuarios.push({ nome, email });
  atualizarListaUsuarios();
}

function removerUsuario(email) {
  const index = usuarios.findIndex(user => user.email === email);
  if (index > -1) {
    usuarios.splice(index, 1);
    atualizarListaUsuarios();
  }
}

function atualizarListaUsuarios() {
  const lista = document.getElementById('listaUsuarios');
  lista.innerHTML = '';
  usuarios.forEach(user => {
    const li = document.createElement('li');
    li.innerHTML = `${user.nome} - ${user.email} <button onclick="removerUsuario('${user.email}')">Remover</button>`;
    lista.appendChild(li);
  });
}
