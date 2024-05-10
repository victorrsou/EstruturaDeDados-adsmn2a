function LinkedList() {
    // classe auxiliar que representará o elemento da cabeça (head). 
    let Node = function (element) {
        this.element = element;
        this.next = null;
    };
    let length = 0;
    let head = null;

    this.append = function (element) {
        // esse método insere um novo elemento no final da list. 
    };
    this.insert = function (position, element) {
        // esse método insere um novo elemento em uma posição específica. 
    };
    this.getElementAt = function (position) {
        // esse método devolve o elemento que está em uma posição específica.
        // Se o elemento não estiver na lista, undefined será devolvido. 
    };
    this.remove = function (element) {
        // esse método remove um elemento da lista . 
    };
    this.removeAt = function (position) {
        // esse método remove um item de uma posição específica da lista. 
    };
    this.indexOf = function (element) {
        // esse método devolve o índice do elemento.
        // Se o elemento não estiver devolve -1 
    };
    this.isEmpty = function () {
        // esse método verifica (true or false) se a lista está vazia 
    };
    this.size = function () {
        // esse método devolve o número de elemento da lista ligada. 
    };
    this.getHead = function () {
        // esse método devolve o elemento que está no inicio (head) da lista ligada. 
    };
    this.toString = function () {
        // esse método devolve uma representação em string da lista ligada. 
    };
}


// existe slide anterior * 

this.append = function (element) {
    // cria um novo Node passando element 
    const node = new Node(element);
    let current = null;
    if (head === null) {
        head = node;
    } else {
        current = head;
        while (current.next) {
            // obtém o ultimo item 
            current = current.next;
        }
        // e atribui o novo elemento a next para criar a ligação 
        current.next = node;
    } //incrementando o tamanho da lista
    length++;
};



this.removeAt = function (position) {
    // verifica valores fora do intervalo 
    if (position > -1 && position < length) {
        let current = head,
            previous;
        // remove o primeiro item 
        if (position === 0) {
            head = current.next;
        } else {
            for (var i = 0; i < position; i++) {
                // guardando o elemento anterior
                previous = current;
                // elemento que queremos remover é o próximo da lista 
                current = current.next;
            }
            // faz a ligação de previous com o next de current:
            // pula esse elemento para removê-lo 
            previous.next = current.next;
        }
        length --;
        return current.element;
    } else {
        return null;
    }
};

this.toString = function () {
    let current = head;
    let string = '';
    // percorrendo os elementos da lista e concatenando e uma string 
    while(current) {
        
    }
    
}