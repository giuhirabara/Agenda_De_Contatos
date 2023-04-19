const form = document.getElementById('form-agenda');
const nomes = [];
const telefones = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adcionaLinha();

});

function adcionaLinha() {
    const inputNome = document.getElementById('nome-completo');
    const inputTelefone = document.getElementById('numero-telefone');

    nomes.push(inputNome.value);
    telefones.push(inputTelefone.value);

    let linha = '<tr>';
    linha += `<td> ${inputNome.value} </td>`;
    linha += `<td> ${inputTelefone.value} </td>`;
    

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputNome.value ='';
    inputTelefone.value ='';
}