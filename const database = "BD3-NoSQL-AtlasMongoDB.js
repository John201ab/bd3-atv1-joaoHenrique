const database = "BD3-NoSQL-AtlasMongoDB";
const collection = 'bd3-nosql-atv1';

use(database);
// db.createCollection(collection);

// db.getCollection("bd3-nosql-atv1").insertMany([
//         {
//         cod_aluno: 1,
//         nome: "Ana Silva",
//         cpf: "11111111111",
//         idade: 20,
//         curso: "Desenvolvimento de Sistemas"
//     },
//     {
//         cod_aluno: 2,
//         nome: "Bruno Santos",
//         cpf: "22222222222",
//         idade: 21,
//         curso: "Desenvolvimento de Sistemas"
//     },
//     {
//         cod_aluno: 3,
//         nome: "Carlos Oliveira",
//         cpf: "33333333333",
//         idade: 19,
//         curso: "Desenvolvimento de Sistemas"
//     },
//     {
//         cod_aluno: 4,
//         nome: "Daniel Souza",
//         cpf: "44444444444",
//         idade: 22,
//         curso: "Desenvolvimento de Sistemas"
//     },
//     {
//         cod_aluno: 5,
//         nome: "Eduarda Lima",
//         cpf: "55555555555",
//         idade: 20,
//         curso: "Desenvolvimento de Sistemas"
//     },
//     {
//         cod_aluno: 6,
//         nome: "Fernanda Costa",
//         cpf: "66666666666",
//         idade: 23,
//         curso: "Desenvolvimento de Sistemas"
//     },
//     {
//         cod_aluno: 7,
//         nome: "Gabriel Almeida",
//         cpf: "77777777777",
//         idade: 18,
//         curso: "Desenvolvimento de Sistemas"
//     },
//     {
//         cod_aluno: 8,
//         nome: "Henrique Martins",
//         cpf: "88888888888",
//         idade: 21,
//         curso: "Desenvolvimento de Sistemas"
//     },
//     {
//         cod_aluno: 9,
//         nome: "Isabela Rodrigues",
//         cpf: "99999999999",
//         idade: 20,
//         curso: "Desenvolvimento de Sistemas"
//     },
//     {
//         cod_aluno: 10,
//         nome: "Juliana Pereira",
//         cpf: "10101010101",
//         idade: 22,
//         curso: "Desenvolvimento de Sistemas"
//     }
// ]);

// aqui requisitamos toda a tabela
db.getCollection("bd3-nosql-atv1").find({});

// aqui requisitamos pelo cpf
db.getCollection("bd3-nosql-atv1").find({ cpf: "11111111111" });

// aqui requisitamos pelo cpf sem os campos cod_aluno e _id
db.getCollection("bd3-nosql-atv1").find({ cpf: "11111111111" },{ cod_aluno: 0, _id: 0});ls

