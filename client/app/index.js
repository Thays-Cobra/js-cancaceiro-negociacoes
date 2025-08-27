//armazenar referencia para cada um dos elementos de emtrada do formulario
var campos = [
    document.querySelector('#data'),
    document.querySelector('#valor'),
    document.querySelector('#quantidade')
];

//precisamos de tbody, pois ele receberá a tr que vamos construir

var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function (event) {
    
    //cancelando a submissao do formulario
    event.preventDefault();    

    var tr = document.createElement('tr');
    campos.forEach(function(campo) {
        //cria uma td sem informacoes
        var td = document.createElement('td');

        //atribui o valor do campo a td
        td.textContent = campo.value;

        //adiciona a td na tr
        tr.appendChild(td);
    });

    //nova td que armazenara o volume da negociacao
    var tdVolume = document.createElement('td');

    //as posicoes 1 e 2 multiplicadas sao o resultado da tdVolume
    tdVolume.textContent = campos[1].value * campos[2].value;

    //adiciona a td que faltava a tr
    tr.appendChild(tdVolume);

    //add a tr
    tbody.appendChild(tr);

    //limpando os campos
    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;

    //foca no campos da data
    campos[0].focus();
});