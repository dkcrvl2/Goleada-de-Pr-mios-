const { createClient } = supabase;

const supabaseClient = createClient(
  "https://teswjgkyqnpvkelakplm.supabase.co",
  "sb_publishable_FJEJr-0Z2jcdK63f_WPA_bR-3Zugv"
);

// Horário limite: jogo começa 05/07/2026 às 16h
const limiteJogo = new Date(2026, 6, 5, 16, 0, 0);

function verificarHorario() {
  const agora = new Date();
  if (agora >= limiteJogo) {
    document.getElementById("nome").disabled = true;
    document.getElementById("whatsapp").disabled = true;
    document.getElementById("brasil").disabled = true;
    document.getElementById("noruega").disabled = true;
    document.querySelector("button[onclick='enviarPalpite()']").disabled = true;
  }
}

function mostrarFormulario() {
  document.getElementById("formulario").style.display = "block";
  verificarHorario();
}

async function enviarPalpite() {
  const agora = new Date();
  if (agora >= limiteJogo) {
    alert("⚠️ O jogo já começou! Não dá mais para enviar palpites.");
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
    alert("❌ Erro ao enviar: " + error.message);
    return;
  }

  alert("✅ Palpite registrado com sucesso! Boa sorte!");

  document.getElementById("nome").value = "";
  document.getElementById("whatsapp").value = "";
  document.getElementById("brasil").value = "";
  document.getElementById("noruega").value = "";
}

verificarHorario();

