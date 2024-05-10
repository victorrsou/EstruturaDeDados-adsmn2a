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