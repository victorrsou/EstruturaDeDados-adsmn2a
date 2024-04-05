function testTruthy(val) {
    return val ? console.log('true') : console.log('false');
}
testTruthy(true); //true
testTruthy(false); //false
testTruthy(new Boolean(false)); // true (objeto é sempre true)
testTruthy(''); // false
testTruthy('Bom dia!'); // true
testTruthy(new String('')); //true (objeto é sempre true)
testTruthy(1); // true
testTruthy(-1); // true
// A propriedade global NaN é um valor especial que significa Not A Number (não é um número)
testTruthy(NaN); // false
testTruthy(new Number(NaN)); // true (objeto é sempre true)
var obj = {name: 'João'};
testTruthy(obj); // true
testTruthy(obj.name); // true
testTruthy(obj.age); // false (propriedade não existe)