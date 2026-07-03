const { createClient } = supabase;

const supabaseClient = createClient(
  "https://teswjgkyqnpvkelakplm.supabase.co",
  "sb_publishable__FJEJr-0Z2jcdK63fO_WPA_bR-3Zugv"
);

async function enviarPalpite() {
  const nome = document.getElementById("nome").value;
  const whatsapp = document.getElementById("whatsapp").value;
  const brasil = document.getElementById("brasil").value;
  const noruega = document.getElementById("noruega").value;

  if (!nome || !whatsapp || brasil === "" || noruega === "") {
    alert("Preencha todos os campos!");
    return;
  }

  const { error } = await supabaseClient
    .from("Palpites")
    .insert([
      {
        nome: nome,
        whatsapp: whatsapp,
        🇧🇷brasil: brasil,
        🇳🇴noruega: noruega
      }
    ]);

  if (error) {
    alert("Erro ao enviar palpite: " + error.message);
    return;
  }

  alert("✅ Palpite enviado com sucesso!");

  document.getElementById("nome").value = "";
  document.getElementById("whatsapp").value = "";
  document.getElementById("brasil").value = "";
  document.getElementById("noruega").value = "";
}
