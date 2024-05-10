class Queue {
    // constrói o objeto com valores a fila 
    constructor() {
        this.items = {};
    }
    enqueue(element) {
        // incluir um elemento na fila 
    }
    size () {
        return this.count - this.lowestCount;
    }
    // devolverá true se a pilha estiver vazia 
    isEmpty() {
        return this.size() === 0;
    }
    dequeue() {
        // verifica se a fila esta vazia 
        if(this.isEmpty()) {
            return undefined;
        }
        // armazenando o valor da frente da fila 
        const result = this.items[this.lowestCount];
        // removendo o elemento da frente 
        delete this.items[this.lowestCount];
        // será necessário incrementar a propriedade lowestCount 
        this.lowestCount++;
        return result;
    }
    peek() {
        // mostra o elemento da frente da fila 
    }
    clear() {
        // para limpar a fila 
    }
    toString() {
        // para imprimir a fila 
    }
}