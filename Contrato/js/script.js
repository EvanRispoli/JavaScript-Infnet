/*
  ATIVIDADE: Automação de contratos!

  Você recebeu o seguinte documento HTML pronto, 
  construído pelo designer de produto, para uma 
  aplicação de automação de contratos digitais. 

  O projeto já possui algum código JavaScript construído.
  
  Seu trabalho é construir uma aplicação em JavaScript 
  para preencher os campos sublinhados, de forma dinâmica, 
  buscando as informações dos usuários na API de usuários.

  O painel de usuários deve ser povoado com os usuários logo 
  no início da aplicação. Implemente o clique nos cartões de usuário,
  para que os campos sejam, então, preenchidos.
  
  Modifique o HTML, se for necessário, somente para adicionar 
  atributos inexistentes, visando o correto funcionamento do seu
  programa. Não modifique as tags, nem a estrutura do cocumento.

  Diretrizes do Projeto:
    - Ponto de entrada da API: https://fakestoreapi.com/users
    - Deve-se utilizar XMLHttpRequest, impreterivelmente
    - Utilize a estrutura de objetos AppContratos já disponibilizada
    - Use o método AppContratos.criarCartao() para inserir cartões no painel
 */

    (() => {

      let AppContratos = {
    
        partes: {
          contratada: null,
          contratante: null
        },
    
        toolbar: {
          btnContratada: document.querySelector("#btn-contratada"),
        },
    
        painel: {
          principal: document.querySelector("#painel"),
          cartoes: document.querySelector("#painel .pessoas"),
          btnFechar: document.querySelector("#painel .p-toolbar button"),
        },
        
        abrirPainel: function () {
          this.painel.principal.style.left = 0;
        },
    
        fecharPainel: function () {
          this.painel.principal.style.left = "-1000%";
        },
    
        iniciar: function () {
    
          // Abrir o painel de usuários
          this.toolbar.btnContratada.addEventListener("click", () => {
            AppContratos.abrirPainel();
          });
          
          // Botão fechar do painel
          this.painel.btnFechar.addEventListener("click", () => {
            AppContratos.fecharPainel();
          });
    
          // Invocar a busca de usuários
          this.buscarUsuarios();
        },
    
        buscarUsuarios: function () {
          // Implementar a busca via API
    
          // Criar o objeto XMLHttpRequest
          let rHttp = new XMLHttpRequest();
    
          rHttp.open("GET", "https://fakestoreapi.com/users");
          rHttp.addEventListener("load", function () {
            const listaUsuarios = JSON.parse(this.responseText);
            // console.log(listaUsuarios);
    
            // Iterar na lista de usuários
            for (const usuario of listaUsuarios) {
              const nome = usuario.name.firstname;
              const sobrenome = usuario.name.lastname;
              const email = usuario.email;
              const cidade = usuario.address.city;
    
              // Retorna a div com o cartão de usuário
              let cartao = AppContratos.criarCartao(nome, sobrenome, email, cidade);
    
              // Adicionar na árvore DOM
              AppContratos.painel.cartoes.appendChild(cartao);
            }
          });
    
          rHttp.send();
        },
    
        criarCartao: function (nome, sobrenome, email, cidade) {
          let divPr    = document.createElement("div"),
              divNome  = document.createElement("div"),
              divEmail = document.createElement("div");
    
          divNome.innerText  = sobrenome;
          divEmail.innerText = email;
    
          divPr.appendChild(divNome);
          divPr.appendChild(divEmail);
    
          // Adicionar o evento de clique para preencher o contrato.
          // Acessar o elemento span dentro do <p id="contratada"/>
          divPr.addEventListener("click", () => {
            let spans = document.querySelectorAll("#contratada span");
            // Nome completo
            spans[0].innerText = nome + " " + sobrenome;
            // Email
            spans[1].innerText = email;
            // Cidade
            spans[2].innerText = cidade;
    
            // Fechar o painel
            AppContratos.fecharPainel();
          })
          
          return divPr;
        }
        
      };
      
      AppContratos.iniciar();
    
    })();