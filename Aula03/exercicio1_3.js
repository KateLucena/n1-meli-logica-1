let i = 0;
let media = 0;
let maxAlt = 0;
let maxNome = 0;
cont = 0;

i = confirm("Deseja cadastrar um atleta?");


while(i == true){
    const nome = prompt("Digite o nome do atleta:");
    const alt = parseFloat(prompt("Digite a altura do atleta"));

    
    if(alt > maxAlt){
        maxNome = nome;
        maxAlt = alt;
    }
    cont++;
    media = media + alt/cont;

    
    console.log(`Atleta: ${nome}`);
    console.log(`Atleta: ${alt}`);
    console.log(`Contador: ${cont}`);
    i = confirm("Deseja cadastrar outro atleta?");
    
}


document.write(`O atleta mais alto é ${maxNome}, com ${maxAlt} de altura!`);
document.write(`A média é ${media} de altura!`);