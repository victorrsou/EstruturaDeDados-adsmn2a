function sayHello() {
    console.log('Hello');
}

sayHello();

// ---------------------------------------------------------
function output(text) {
    console.log(text);
}

output('Boa noite!', 'Olá tudo bem!');

// Boa noite!
// só retorna o primeiro parâmetro, 'Boa noite!', por conta da função onde só existe um parâmetro. 

function sum(num1, num2) {
    return num1 + num2;
};

var result = sum(1, 2);
output(result)