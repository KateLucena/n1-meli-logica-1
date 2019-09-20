const sort1 = Math.floor(Math.random()*5+1);
const sort2 = Math.floor(Math.random()*5+1);
const num1 = Number(prompt("Adivinhe o primeiro número sorteado de 1 a 5:"));
const num2 = Number(prompt("Adivinhe o segundo número sorteado de 1 a 5:"));

if(num1 === sort1 || num1 === sort2 && num2 === sort1 || num2 ===sort2){
  alert(`Parabéns, você acertou os dois números sorteados!! ${sort1} e ${sort2}`)
} else {
  alert(`Você errou, os números sorteados são: ${sort1} e ${sort2}`);
}