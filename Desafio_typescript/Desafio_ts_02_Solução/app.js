"use strict";
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Padeiro"] = 2] = "Padeiro";
    Profissao[Profissao["Desenvolvedor"] = 3] = "Desenvolvedor";
    Profissao[Profissao["Estudante"] = 4] = "Estudante";
})(Profissao || (Profissao = {}));
var Perido;
(function (Perido) {
    Perido[Perido["manh\u00E3"] = 0] = "manh\u00E3";
    Perido[Perido["tarde"] = 1] = "tarde";
    Perido[Perido["noite"] = 2] = "noite";
})(Perido || (Perido = {}));
let maria = {
    nome: "Maria",
    idade: 25,
    profissao: Profissao.Atriz
};
let niguel = {
    nome: "Niguel",
    idade: 30,
    profissao: Profissao.Desenvolvedor
};
let angela = {
    nome: "Angela",
    idade: 20,
    profissao: Profissao.Estudante,
    curso: ['matematica'],
    periodo: Perido.manhã
};
