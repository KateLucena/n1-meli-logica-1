const num1 = Number(prompt("Informe o primeiro número:"));
const num2 = Number(prompt("Informe o segundo número:"));

if (num1 > num2){
    alert(`O primeiro número ,${num1} , é maior que o segundo número , ${num2}!`);
} else {
    if(num1 === num2){
        alert(`O primeiro número, ${num1}, é igual ao segundo número, ${num2}!`);
    } else{
        alert(`O segundo numero, ${num2} , é maior que o primeiro, ${num1}!`);
    }
    
}