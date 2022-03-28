
/*

   01) Crie uma aplicação com duas caixas de texto que só aceitam 
   números. Deve ainda possuir um botão que quando 
   acionado deve somar os valores digitados nas caixas de texto.
   Não deve ser possível calcular se faltar algum dos números.

   02) Altere o exercício 01, adicionando um campo select box
   contendo como opções: "+" e "-". Se o usuário selecionar a 
   opção "+" o botão Calcular deve somar os valores, caso contrário
   deve diminuir os valores.

 */

(() => {

   // Passo 1 - Vincular HTML + JavaScript (DOM).
   let btnCalcular = document.querySelector("#btn-calcular");
   let result = document.querySelector("#resultado");

   // Passo 2 - Adicionar o evento no botão.
   btnCalcular.addEventListener("click", calcularSoma);

   // Passo 3 - Criar a função de cálculo.
   function calcularSoma () {
      // Vincular o DOM + Number() para converter a String para Number.
      const num1 = Number(document.querySelector("#num-1").value);
      const num2 = Number(document.querySelector("#num-2").value);

      // Acessar o select box
      const operacao = document.querySelector("#operacao").value;

      // Verificar se possui valores digitados
      if (num1 !== 0 && num2 !== 0) {

         // Verificar qual operação
         if ( operacao === "soma" ) {
            // Se for soma, deve somar! =P
            result.innerText = num1 + num2;         
         } else if ( operacao === "menos" ) {
            // Se for subtração, deve diminuir! =P
            result.innerText = num1 - num2; 
         } else if ( operacao === "multi" ) {
            result.innerText = num1 * num2; 
         } else {
            result.innerText = num1 / num2; 
         }

         // Verificar qual operação com ternário
         // result.innerText = operacao === "soma" ? num1 + num2 : num1 - num2;
      
      } else {
         alert("Receba! Por favor insira os números");
      }

   }

})();