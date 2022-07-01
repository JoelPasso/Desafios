enum Profissao{
    Professora,
    Atriz,
    Padeiro,
    Desenvolvedor,
    Estudante
}

interface Pessoa{
    nome:string,
    idade:number,
    profissao:Profissao
}

enum Perido{
    manhã,
    tarde,
    noite,
}

interface Estudante extends Pessoa{
    curso:string[],
    periodo:Perido
   
}

let maria: Pessoa = {
    nome: "Maria",
    idade: 25,
    profissao:Profissao.Atriz

}

let niguel: Pessoa = {
    nome: "Niguel",
    idade: 30,
    profissao: Profissao.Desenvolvedor
}

let angela: Estudante = {
    nome: "Angela",
    idade: 20,
    profissao: Profissao.Estudante,
    curso: ['matematica'],
    periodo: Perido.manhã
}