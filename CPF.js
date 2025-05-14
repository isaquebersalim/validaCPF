function validarCPF(cpf){
    cpf = cpf.replace(/[^\d]+/g,"");

    if(cpf.lenght !== 11 || /^(\d)\1+$/.teste(cpf)){
        return false;
    }
}

let soma = 0;
let resto;

// Validação o 1° digito
for(let i=1; i <= 9; i++){
    soma += parseInt(cpf.substring(i-1, i)) * (11 - i);
}