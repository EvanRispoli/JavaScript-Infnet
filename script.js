// 1. Editar globalmente para demonstrar as funcionalidades do DOM.

// Armazenando os objetos HTML
const nmUsuario = document.querySelector(".nm-usuario");
const btnPerfil = document.querySelector("#btn-perfil");
const pnPerfil  = document.querySelector("#pn-perfil");

// Botões
const btnFechar = document.querySelector(".btn-close");
const btnSalvar = document.querySelector("#btn-salvar");

// Evento para abrir o painel do Perfil
btnPerfil.addEventListener("click", () => {
  // Alterando os estilos
  pnPerfil.style.top = 0;
  btnFechar.style.display = "flex";
});

// Inserir o evento de fechar o Perfil
btnFechar.addEventListener("click", fecharPainel);

// Evento para alterar o nome do usuário
btnSalvar.addEventListener("click", () => { 
	const input = document.querySelector("#input-nome");
  nmUsuario.innerHTML = input.value;
  fecharPainel();
});

function fecharPainel() {
	pnPerfil.style.top = "-100%";
  btnFechar.style.display = "none";
}

// 	1.1. Demontrar como acessar os elementos pelo console. 
// 2. Utilizar a função autoinvocada (function () {})();
// 	2.1. Abrir o painel de perfil.
//	2.1.1. Acessar os elementos pelo DOM.
// 	2.1.2. Adicionar evento de troca de classe CSS.
// 	2.1.3. Evento para fechar o painel.
// 	2.2. Alterar o nome do usuário que está como "Visitante".
