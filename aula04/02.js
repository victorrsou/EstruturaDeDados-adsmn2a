// armazenando a série fibonacci no array com 20 elementos 
const fibonacci = [];
fibonacci[0] = 1;
fibonacci[1] = 1;
for (let i = 2; i < 20; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

// se quiser imprimir no console, um elemento ao lado do outro, faça a conversão em String, concatenando com o método join. 
console.log(fibonacci.join(' '));

// percorrendo o array e mostrando no console cada elemento fibonacci 
for (let i = 0; i < fibonacci.length; i++) {
    console.log(fibonacci[i]);
}