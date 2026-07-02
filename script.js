function copiarPix() {
  navigator.clipboard.writeText("92993963533");
  alert("✅ PIX copiado com sucesso!");
}

function enviarPalpite() {
  const nome = document.getElementById("nome").value;
  const whats = document.getElementById("whats").value;
  const brasil = document.getElementById("brasil").value;
  const noruega = document.getElementById("noruega").value;
  const aviso = document.getElementById("aviso");

  if (!nome || !whats || !brasil || !noruega) {
    aviso.textContent = "⚠️ Preencha todos os campos!";
    aviso.style.background = "#ffcccc";
    aviso.style.color = "#a00";
    return;
  }

  aviso.textContent = "🎉 Palpite enviado! Boa sorte!";
  aviso.style.background = "#ccffcc";
  aviso.style.color = "#060";
}
