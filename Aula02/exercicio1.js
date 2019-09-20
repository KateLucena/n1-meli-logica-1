const sort = Math.floor(Math.random() * 10 + 1);
let num = Number(prompt("Adivinhe o número sorteado de 1 a 10:"))

if (num === sort) {
  alert(`Você acertou o numero sorteado foi ${sort}!`);
} else {
  alert(`Você errou, tente outra vez!`);
  num = Number(prompt("Adivinhe novamente o número sorteado de 1 a 10:"));
  if (num === sort) {
    alert(`Você acertou o numero sorteado foi ${sort}!`);
  } else {
    alert(`Ah que pena você errou, o número sorteado é ${sort}!`);
  }
}

