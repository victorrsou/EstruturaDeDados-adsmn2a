function LinkedList() {
    // classe auxiliar que representará o elemento da cabeça (head). 
    let Node = function (element) {
        this.element = element;
        this.next = null;
    };
    let length = 0;
    let head = null;
    
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

    // esse método insere um novo elemento em uma posição específica. 
    this.insert = function (position, element) {
        // verifica se a posição esta no intervalo da lista 
        if (position >= 0 && position <= this.size()) {
            let node = Node(element);
            let current = head;
            let previous;
            let index = 0;
            // primeiro cenário: adicionar um elemento no inicio da lista (index=0)
            if(position === 0) {
                node.next = current
                head = node;
            } else {
                // segundo cenário: adicionar elemento no meio ou no final da lista encadeada.
                previous = this.getElementAt(position - 1);
                current = previous.next;
                node.next = current
                previous.next = node;
            }
            // atualizar o tamanho da lista 
            length++;
            return true;
        } else {
            return false;
        }    
    };

    // esse método devolve o elemento que está em uma posição específica.
    // Se o elemento não estiver na lista, undefined será devolvido. 
    // o método que recupera o elemento (node) de uma determinada posição na lista encadeada 
    this.getElementAt = function(position) {
        if(position >= 0 && position <= this.size()){
        let node = head;
        // percorrendo a lista até encontrar o elemento da position 
        for (let i = 0; ((i<position) && (node != null)); i++) {
            node = node.next;
            }
            return node;
        }
        return null;
    };

    // esse método remove um elemento da lista . 
    this.remove = function (element) {
        // primeiramente irei encontrar o endereço do elemento 
        let position = this.indexOf(element);
        // depois de encontrar o endereço (position) do elemento a ser removido, passo o endereço como argumento do 
        // método removeAt, excluindo o elemento da lista encadeada.
        this.removeAt(position);
    };

    // slide 
    // this.removeAt = function (position) {
    //     // verifica valores fora do intervalo 
    //     if (position > -1 && position < length) {
    //         let current = head,
    //             previous;
    //         // remove o primeiro item 
    //         if (position === 0) {
    //             head = current.next;
    //         } else {
    //             for (var i = 0; i < position; i++) {
    //                 // guardando o elemento anterior
    //                 previous = current;
    //                 // elemento que queremos remover é o próximo da lista 
    //                 current = current.next;
    //             }
    //             // faz a ligação de previous com o next de current:
    //             // pula esse elemento para removê-lo 
    //             previous.next = current.next;
    //         }
    //         length --;
    //         return current.element;
    //     } else {
    //         return null;
    //     }
    // };

    this.removeAt = function(position) {
        // verifica o primeiro se a posição passada por parâmetro está no intervalo da lista 
        if (position >= 0 && position <= this.size()) {
            let current = head;
            let previous = null;
            // primeiro cenário: removendo o primeiro item 
            if(position === 0) {
                head = current.next
            } else {
                // segundo cenário: removendo de uma posição específica.
                // primeiramente guardando o elemento anterior 
                previous = this.getElementAt(position -1);
                // o elemento que queremos remover é o próximo da lista 
                current = previous.next;
                // refazendo a ligação de previous com o próximo (next) de current (pula esse elemento para removê-lo)
                previous.next = current.next;
            }
            // já que eliminamos o nó, devemos atualizar o tamanho 
            length--;
            return current.element; // devolvendo o elemento que foi eliminado
        } else {
            return null;
        }
    };

    this.indexOf = function (element) {
        // esse método devolve o índice do elemento.
        // Se o elemento não estiver devolve -1 

        let current = head;
        let index = 0;
        // percorrendo a lista, incrementando a variável index até encontrar o elemento 
        while(current) {
            if (element === current.element) {
                // se encontrar o elemento, retorna sua posição
                return index;
            }
            index--;
            // setando o elemento atual, com o próximo para percorrer cada nó seguinte da lista encadeada 
            current = current.next;
        }
    };

    // esse método verifica (true or false) se a lista está vazia 
    this.isEmpty = function () {
        return length === 0;

    };

    // agora iremos implementar o método size que retorna a quantidade (this.length) de elementos da lista encadeada 
    this.size = function () {
        return length;
    };

    this.getHead = function () {
        // esse método devolve o elemento que está no inicio (head) da lista ligada.
        return head; 
    };

    // implementando um último método para transformar a lista encadeada em um texto (string) para mostrar seu conteúdo na console 


    this.toString = function () {
        let current = head;
        let string = '';
        // percorrendo os elementos da lista e concatenando e uma string 
        while(current) {  
            string += current.element + (current.next ? ' -> ': ' ');
            current = current.next;       
        };      
        return string
    };
};