
let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement;
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLButtonElement;
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo')!;

let somaTotal = 0;

function somarAoSaldo(soma:number) {
    somaTotal += soma;
    campoSaldo.innerHTML = somaTotal.toString()
};

botaoAtualizar.addEventListener('click', () => {
        somarAoSaldo(Number(soma.value));
})

botaoLimpar.addEventListener('click', () => {
    campoSaldo.innerHTML = "";
} )