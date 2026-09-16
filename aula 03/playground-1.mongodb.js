const database = 'BD3-NoSQL-Variedades';
const collection = 'BD3-NoSQL-Variedades';
use(database);
db.createCollection(collection);
//A:
db[collection].insertMany(
    [
        {
            "cod_item": "1",
            "nome_item": "Garrafa Térmica Inox",
            "categoria": "Utilidades Domésticas",
            "capacidade_ml": 750,
            "valor": 89.90
        },
        {
            "cod_item": "2",
            "nome_item": "Luminária de Mesa LED",
            "categoria": "Iluminação",
            "potencia_w": 8,
            "valor": 65.00
        },
        {
            "cod_item": "3",
            "nome_item": "Kit de Potes Herméticos",
            "categoria": "Organização",
            "quantidade_pecas": 5,
            "valor": 79.90
        },
        {
            "cod_item": "4",
            "nome_item": "Tapete Antiderrapante para Banheiro",
            "categoria": "Casa e Decoração",
            "dimensoes": "60x40cm",
            "valor": 35.00
        },
        {
            "cod_item": "5",
            "nome_item": "Suporte Veicular para Smartphone",
            "categoria": "Automotivo",
            "tipo_fixacao": "Saída de Ar",
            "valor": 45.50
        },
        {
            "cod_item": "6",
            "nome_item": "Conjunto de Ferramentas Básicas",
            "categoria": "Ferramentas",
            "quantidade_pecas": 18,
            "valor": 110.00
        },
        {
            "cod_item": "7",
            "nome_item": "Umidificador de Ar Ultrassônico",
            "categoria": "Eletroportáteis",
            "capacidade_ml": 2500,
            "valor": 149.90
        },
        {
            "cod_item": "8",
            "nome_item": "Cabo USB-C Retrátil",
            "categoria": "Acessórios de Tecnologia",
            "comprimento_m": 1.2,
            "valor": 29.90
        },
        {
            "cod_item": "9",
            "nome_item": "Almofada de Pescoço para Viagem",
            "categoria": "Conforto e Viagem",
            "material": "Espuma Viscoelástica",
            "valor": 55.00
        },
        {
            "cod_item": "10",
            "nome_item": "Tesoura Multiuso em Aço Inox",
            "categoria": "Papelaria e Utilidades",
            "tamanho_polegadas": 8,
            "valor": 19.90
        }
    ]
);

//B:
//db[collection].find({
//    valor:{$gt:55.00}
//});
// C:
//db[collection].find({
//    valor: {$lt: 70}
//});

// D:
db[collection].find({
    valor: {$gte: 40, $lte: 70}
});