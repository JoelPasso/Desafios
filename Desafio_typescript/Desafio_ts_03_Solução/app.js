"use strict";
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');
let somaTotal = 0;
function somarAoSaldo(soma) {
    somaTotal += soma;
    campoSaldo.innerHTML = somaTotal.toString();
}
;
botaoAtualizar.addEventListener('click', () => {
    somarAoSaldo(Number(soma.value));
});
botaoLimpar.addEventListener('click', () => {
    campoSaldo.innerHTML = "";
});
