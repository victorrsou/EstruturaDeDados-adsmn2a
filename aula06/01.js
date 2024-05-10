// criaremos nossa própria classe para representar uma fila 
class Queue {
    constructor() {
        // propriedade count para controlar o tamanho da fila 
        this.count = 0;
        // como removeremos da frente da FileReader, a propriedade
        // lowestCount para manter o AbortController(indice) do primeiro elemento 
        this.lowestCount = 0;
        // usaremos um objeto para armazenar elementos na fila 
        this.items = {};
    }
}
