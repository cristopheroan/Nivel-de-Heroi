let herois = []; // Array para armazenar os heróis

window.onload = function() {
    document.getElementById('btnAdicionar').onclick = adicionarHeroi;
}
// Loop para coletar dados de 3 heróis
function adicionarHeroi() {

    // Variaveis para coletar o nome e XP do herói do formulário
    let heroi = document.getElementById('nomeHeroi').value;
    let xp = Number(document.getElementById('xpHeroi').value);

    if (!heroi || isNaN(xp) || xp < 0) {
        alert('Por favor, insira um nome válido e um XP numérico não negativo.');
        return;
    }

    let nivel;

    // Estrutura condicional para determinar o nível do herói com base no XP
    if (xp <= 1000) {
        nivel = 'Ferreiro';
    } else if (xp >= 1001 && xp <= 2000) {
        nivel = 'Bronze';
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = 'Prata';
    } else if (xp >= 5001 && xp <= 7000) {
        nivel = 'Ouro';
    } else if (xp >= 7001 && xp <= 8000) {
        nivel = 'Platina';
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = 'Ascendente';
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = 'Mítico';
    } else {
        nivel = 'Lendário';
    }


    // Adiciona a informação do herói ao array
    herois.push({nome: heroi, xp: xp, nivel: nivel});

    atualizarLista();
    limparCampos();

    if (herois.length === 3) {
        compararHerois();
    }

}

function atualizarLista() {
    let lista = document.getElementById('listaHerois');
    lista.innerHTML = ''; // Limpa a lista antes de atualizar

    herois.forEach(msg => {
        let li = document.createElement('li');
        li.textContent = `Herói: ${msg.nome}, XP: ${msg.xp}, Nível: ${msg.nivel}`;
        lista.appendChild(li);
    });
}

function limparCampos() {
    document.getElementById('nomeHeroi').value = '';
    document.getElementById('xpHeroi').value = '';
}

function compararHerois() {
    let i = 0;
    let heroiMaisExperiente = herois[0];

    while (i < herois.length) {
        if (herois[i].xp > heroiMaisExperiente.xp) {
            heroiMaisExperiente = herois[i];
        }
        i++;
    }

    alert(`O herói mais experiente é ${heroiMaisExperiente.nome} com ${heroiMaisExperiente.xp} XP, nível ${heroiMaisExperiente.nivel}!.`);
}