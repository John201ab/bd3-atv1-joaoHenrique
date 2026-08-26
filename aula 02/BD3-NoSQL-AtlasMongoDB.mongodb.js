const database = "BD3-NoSQL-AtlasMongoDB";
const collection = 'bd3-nosql-atv1';

use(database)

db['bd3-nosql-atv2'].find();

// // muda os nomes dos alunos
// db['bd3-nosql-atv2'].updateMany(
//     {nome: "Ana Silva"},
//     {$set:{nome: "Ana da Silva"}}
// );

// // muda o cpf dos alunos
// db['bd3-nosql-atv2'].updateMany(
//     {cpf:"11111111111"},
//     {$set:{cpf:"22222222222"}}
// );

// // muda o rg dos alunos
// db['bd3-nosql-atv2'].updateMany(
//     {rg:"123456789"},
//     {$set:{rg:"987654321"}}
// );