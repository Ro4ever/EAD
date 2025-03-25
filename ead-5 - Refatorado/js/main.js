let usuarios = [];

function adicionarUsuario() {
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!nome || !email) {
    alert("Preencha todos os campos!");
    return;
  }

  usuarios.push({ nome, email });
  atualizarLista();
  limparCampos();
}

function removerUsuario(email) {
  usuarios = usuarios.filter(user => user.email !== email);
  atualizarLista();
}

function atualizarLista() {
  const lista = document.getElementById("listaUsuarios");
  lista.innerHTML = "";

  usuarios.forEach(user => {
    const li = document.createElement("li");
    li.innerHTML = `${user.nome} - ${user.email} <button onclick="removerUsuario('${user.email}')">Remover</button>`;
    lista.appendChild(li);
  });
}

function limparCampos() {
  document.getElementById("nome").value = "";
  document.getElementById("email").value = "";
}

document.getElementById("goContato").addEventListener("click", () => {
  window.location.href = "pages/contato.html";
});
