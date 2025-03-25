document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formContato");
  const goHomeBtn = document.getElementById("goHome");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const nome = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const mensagem = document.getElementById("mensagem").value;

      console.log("Formulário enviado:", { nome, email, mensagem });
      alert("Mensagem enviada com sucesso!");
    });
  }

  if (goHomeBtn) {
    goHomeBtn.addEventListener("click", () => {
      window.location.href = "../index.html";
    });
  }
});
