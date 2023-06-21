const readLine = require('readline') .createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Esse programa checará se você é maior de 18 anos e tem CNH para saber se voce está apto para dirigir.');
console.log('Além das suas verifcações, precisamos verificar se você esté na lista de presença do horário.');

readLine.question('Qual o ano do seu nascimento?', ano =>{
    if(ano > 2004) {
        console.log('Você não tem 18 anos');
    }else{
        readLine.question("Você tem CNH? (Sim/Nâo)", temHabilitacao => {
            if(!(temHabilitacao.toUpperCase() === "SIM")){
                console.log('Você não tem CNH para entrar no kart.');
            }else{
                readLine.question("Qual seu nome?", nome => {
                    switch(nome){
                        case 'Rian':
                            console.log('bem vindo ao kart, Rian');
                            break;
                        case 'Zila':
                            console.log('bem vinda ao kart, Zila');
                            break; 
                        default:
                            console.log('Seu nome não foi identificado na lista de presença.');    
                    }
                });
            }
        })
    }
})