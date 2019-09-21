let i = "S";
let media = 0;
let maxAlt = 0;
let maxNome = 0;
cont = 0;


while(i == "S" || 1 == "s"){
    const nome = prompt("Digite o nome do atleta:");
    const alt = parseFloat(prompt("Digite a altura do atleta"));

    
    if(alt > maxAlt){
        maxNome = nome;
        maxAlt = alt;
    }
    cont++;
    media = (media + alt)/cont;

    
    console.log(`Atleta: ${nome}`);
    console.log(`Atleta: ${alt}`);
    console.log(`Contador: ${cont}`);
    if(i == "S" || 1 == "s"){
       i = prompt("Deseja cadastrar novamente um atleta? (Digite S ou N)");
    }
    
    
}


document.write(`O atleta mais alto é ${maxNome}, com ${maxAlt} de altura!`);
document.write(`A média é ${media} de altura!`);