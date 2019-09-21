const sort = Math.floor(Math.random() * 10 + 1);
let num = Number(prompt("Adivinhe o número sorteado de 1 a 10:"))
let i = 0;
if (num === sort) {
  alert(`Parabéns!!Você acertou, o numero sorteado foi ${sort}!`);

} else {
    while(i<2 && num != sort){
        if (num > sort) {
            alert(`Você errou, tente outra vez!O número digitado é maior que o sorteado!Tente outro número abaixo!`);
          } else {
            alert(`Você errou, tente outra vez!O número digitado é menor que o sorteado!Tente outro número acima!`);
          } 
          if (num === sort) {
            alert(`Você acertou o numero sorteado foi ${sort}!`);
          } else {
            alert(`Ah que pena você errou, o número sorteado é ${sort}!`);
          }  
          i++;
    }

  const num = Number(prompt("Adivinhe novamente o número sorteado de 1 a 10:"));
  
}
