// INSERE DADOS DO LIVRO NO FIRESTONE

// APRESENTA O OBJETO NO FORMULARIO HTML:
const form =document .querySelector ('#add-book-form');

// tratamento do evento de click para a inserção
form.addEventListener('submit', event => {

    event.preventDefault();

// INSERE OS DADOS NO FIRESTONE
    db.collection("libri-books").add({
        autor: form.autor.value,
        titulo: form.titulo.value
    }).then(() =>{
        form.autor.value = '';
        form.titulo.value = '';
        alert('FOIIIII')
    });
});

