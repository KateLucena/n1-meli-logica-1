let i = 0;
let maxAlt = 0;
let maxNome = 0;

while(i<5){
    const nome = prompt("Digite o nome do atleta:");
    const alt = parseFloat(prompt("Digite a altura do atleta"));


    if(alt > maxAlt){
        maxNome = nome;
        maxAlt = alt;
    }
    
    console.log(`Atleta: ${nome}`);
    console.log(`Atleta: ${alt}`);

    i++;

}


alert(`O atleta mais alto é ${maxNome}, com ${maxAlt} de altura!`);