/* CRIAÇÃO DA CONSTANTE COM O NOME DO BANCO DE DADOS */
const database = 'BD3-AULA01';

/* HABILITA O BANCO DE DADOS PARA USO */
use(database);


/* EXEMPLO DE SELEÇÃO COM MÉTODO find (SEM CRITÉRIO) */
// db['LIVRARIA'].find();

/* EXEMPLO DE SELEÇÃO COM MÉTODO find COM CRITÉRIO */
// db['LIVRARIA'].find({'categoria': 'Ficção Científica'});
// db['LIVRARIA'].find({'categoria': 'Fantasia Heroica'});

// db['LIVRARIA'].find({'autor': 'Isaac Asimov'});
// db['LIVRARIA'].find({'autor': 'J.R.R Tolkien'});

/* EXEMPLO DE SELEÇÃO COM MÉTODO find COM CRITÉRIO E OCULTAÇÃO DE CAMPOS */
// db['LIVRARIA'].find({'autor': 'Isaac Asimov'}, {'_id':0, 'codigo':0});

// db['LIVRARIA'].find({'autor': 'Isaac Asimov'}, {'_id':0, 'codigo':0, 'descricao':0});

/* EXEMPLO DE SELEÇÃO COM USO DE OPERADOR "LIKE" */
// db['LIVRARIA'].find({'descricao':/Robôs/})
// db['LIVRARIA'].find({'descricao':/robôs/i})
// db['LIVRARIA'].find({'descricao':/ROBÔS/i})
db['LIVRARIA'].find({'descricao':/rObÔs/i}, {'descricao':0})


