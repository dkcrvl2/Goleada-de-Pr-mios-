const { createClient } = supabase;

// Dados do seu projeto Supabase
const supabaseClient = createClient(
  "https://teswjgkyqnpvkelakplm.supabase.co",
  "sb_publishable_FJEJr-0Z2jcdK63f_WPA_bR-3Zugv"
);

// 🕒 HORÁRIO LIMITE: Domingo 05/07/2026 às 16h00 (Manaus)
const limiteJogo = new Date(2026, 6, 5, 16, 0, 0); // mês 6 = julho

// Verifica se já passou do horário do jogo
function verificarHorario() {
  const agora = new Date();
  const formulario = document.getElementById("formulario");
  const aviso = document.createElement("p");

  if (agora >= limiteJogo) {
    // Desativa tudo
    document.getElementById("nome").disabled = true;
    document.getElementById("whatsapp").disabled = true;
    document.getElementById("brasil").disabled = true;
    document.getElementById("noruega").disabled = true;
    document.querySelector("button[onclick='enviarPalpite()']").disabled = true;

    // Mostra aviso
    aviso.style.color = "#d32f2f";
    aviso.style.fontWeight = "bold";
    aviso.style.marginTop = "10px";
    aviso.textContent = "⚠️ O jogo já começou! Não é mais possível enviar palpites.";
    formulario.appendChild(aviso);
  }
}

// Mostra o formulário ao clicar em Participar
function mostrarFormulario() {
  document.getElementById("formulario").style.display = "block";
  verificarHorario(); // checa logo quando abrir
}

// Envia o palpite para o banco
async function enviarPalpite() {
  const agora = new Date();
  if (agora >= limiteJogo) {
    alert("⚠️ O jogo já começou! Não é mais permitido enviar palpites.");
    return;
  }

  const nome = document.getElementById("nome").value;
  const whatsapp = document.getElementById("whatsapp").value;
  const brasil = document.getElementById("brasil").value;
  const noruega = document.getElementById("noruega").value;

  if (!nome || !whatsapp || brasil === "" || noruega === "") {
    alert("⚠️ Preencha todos os campos!");
    return;
  }

  const { error } = await supabaseClient
    .from("Palpites")
    .insert([{ nome, whatsapp, brasil, noruega }]);

  if (error) {
    alert("❌ Erro: " + error.message);
    return;
  }

  alert("✅ Palpite enviado com sucesso! Boa sorte!");
  // Limpa os campos
  document.getElementById("nome").value = "";
  document.getElementById("whatsapp").value = "";
  document.getElementById("brasil").value = "";
  document.getElementById("noruega").value = "";
}

// Função para copiar PIX
function copiarPix() {
  navigator.clipboard.writeText("92993963533");
  alert("✅ PIX copiado!");
}

// Executa a verificação assim que a página carregar
verificarHorario();
