function enviarPalpite() {
  const nome = document.getElementById("nome").value;
  const whatsapp = document.getElementById("whatsapp").value;
  const brasil = document.getElementById("brasil").value;
  const noruega = document.getElementById("noruega").value;

  if (!nome || !whatsapp || brasil === "" || noruega === "") {
    alert("Preencha todos os campos!");
    return;
  }

  alert(
    "✅ Palpite enviado!\n\n" +
    "Nome: " + nome +
    "\nBrasil: " + brasil +
    "\nNoruega: " + noruega
  );
}
