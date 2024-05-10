class Queue {
    constructor() {
        // propriedade count para controlar o tamanho da fila 
        this.count = 0;
        // como removeremos da frente da fila, a propriedade
        // lowestCount para manter o controle do primeiro elemento
        this.lowestCount = 0;
        // usaremos um objeto para armazenar elementos na fila 
        this.items = {};
    }

    enqueue(element) {
        this.items[this.count] = element;
        this.count ++
    }
}

/////////////

// basta retornar a diferença de count por lowestCount 
size () {
    return this.count - this.lowestCount;
}
// devolverá true se a pilha estiver vazia 
isEmpty() {
    return this.size() === 0;
}
