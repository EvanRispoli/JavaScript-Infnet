
/*

   03) Crie uma aplicação que gere uma lista de itens de 
   supermercado. O HTML deve conter uma caixa de texto de número
   com valor inicial igual a 50, mais um botão chamado "gerar lista".
   Quando o botão for acionado, deve ser gerada uma lista de itens
   com valores aleatórios entre R$30,00 e R$100,00. Essa lista 
   deve ser impressa no HTML, gerando elementos dinamicamente.

   Algumas diretrizes:
   - Cada elemento da lista deve ser um objeto com a função construtora;
   - A lista precisa ser armazenada primeiro em um array.

 */

(() => {

   // Criando a classe ItemSupermercado
   function ItemSupermercado ( id, valor ) {
      // Atributos da classe
      // Identificador único
      this.id = id;
      // Valor do item
      this.valor = valor;
   }

   // Gerando um número aleatório entre dois valores
   function numAleatorio(min, max) {
      return Math.random() * (max - min) + min;
   }

   // Criar o array
   arrayLista = [];

   // Acessar o DOM para o botão
   let btnGerar = document.querySelector("#btn-lista");
   // Criar o evento
   btnGerar.addEventListener("click", () => {

      let qtdLista = Number(document.querySelector("#qtd-lista").value);
      
      for (let i = 1; i <= qtdLista; i++) {
         // Instancia a classe ItemSupermercado
         let item = new ItemSupermercado( i, numAleatorio(30, 100) );

         // Adicionar item no array
         arrayLista.push(item);
      }

      gerarLista();
      
   } );

   function gerarLista() {

      let tabela = document.querySelector("#lista");

      for (const item of arrayLista) {

         // Gerar uma linha da tabela
         let tr = document.createElement("tr");
         
         // Gerar as colunas
         let tdId    = document.createElement("td");
         let tdValor = document.createElement("td");
         
         // Alterar os valores de cada coluna
         tdId.innerText = "Item " + item.id;
         tdValor.innerText = item.valor.toFixed(2);

         // Adicinar as colunas na linha da tabela
         tr.appendChild(tdId);
         tr.appendChild(tdValor);

         // Adicionar na tabela
         tabela.appendChild(tr);
      }

   }

})();