/*

   Revisão sobre objetos JavaScript

 */

// Notação litaral JSON
let bulbasaur = {
   // Propriedades
   ptsVida: 50,
   ptsAtaque: 15,
   ptsDefesa: 20,
   tipo: "planta",

   // Métodos (funções / ações)
   execAtaque: function () {
      // Aqui programaríamos a instruções de ataque
      console.log("Atacando...");
   },

   execDefesa: function () {
      // As instruções de defesa
      console.log("Defendendo...");
   }
}

// Acessando a propriedade
let dano = bulbasaur.ptsAtaque + 20;

// Invocando o Método
bulbasaur.execDefesa();

// Trabalhando com os conceitos de herança
// Notação com função construtora

// Criação da Classe Pokemon
function Pokemon (ataque, defesa, vida, tipo) {

   // Propriedades / atributos
   this.ptsAtaque = ataque;
   this.ptsDefesa = defesa;
   this.ptsVida = vida;
   this.tipo = tipo;

   // Métodos
   function execAtaque() {

   }
}

// Instanciar a classe para cada pokemon
let charmander = new Pokemon(35, 27, 30, "fogo");
let pikachu = new Pokemon(35, 27, 30, "fogo");
let squartle = new Pokemon(35, 27, 30, "fogo");
let venonate = new Pokemon(35, 27, 30, "fogo");