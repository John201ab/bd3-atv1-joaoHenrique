/* CRIAÇÃO DA CONSTANTE COM O NOME DO BANCO DE DADOS */
const database = 'BD3-AULA01';

/* HABILITA O BANCO DE DADOS PARA USO */
use(database);

// teste de verificação de dados especificos
// db['LIVRARIA'].find();

// teste de verificaçao de dados especificos
// db['LIVRARIA'].find({titulo:"As cavernas de aço"});

// atualiza o dado do valor de um livro
// db['LIVRARIA'].updateOne(
//   {titulo: 'As Cavernas de Aço'},
//   {
//     $set:{valor:200}
//   }
// );

// altera o valor na tabela de mais de um livro
// db['LIVRARIA'].updateMany(
//   {autor: "J.R.R Tolkien"},
//   {$set:{autor: "john Ronald Ruel Tolkien"}}
// );

// Teste de seleção de dado especifico
// db['LIVRARIA'].find({codigo:'8'});

// deleta os dados de valor do livro
// db['LIVRARIA'].deleteOne({codigo:'8'});

// deleta os dados de vários itens
// db['LIVRARIA'].deleteMany({autor: 'Isaac Asimov'});