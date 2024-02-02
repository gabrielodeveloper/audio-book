const botaoPlayPause = document.getElementById('play-pause');
const audioCapitulo = document.getElementById('audio-capitulo');
const proximo = document.getElementById('proximo');
const anterior = document.getElementById('anterior');
const capitulo = document.getElementById('capitulo');

const numeroCapitulos = 10;
let taTocando = 0;
let capituloAtual = 1;

function tocarOuPausar() {
    if (taTocando === 0) {
        audioCapitulo.play();
        botaoPlayPause.classList.remove('bi-play-circle-fill');
        botaoPlayPause.classList.add('bi-pause-circle-fill');
        taTocando = 1;
    } else {
        audioCapitulo.pause();
        botaoPlayPause.classList.remove('bi-pause-circle-fill');
        botaoPlayPause.classList.add('bi-play-circle-fill');
        taTocando = 0;
    }
}

function proximaFaixa() {
    if(capituloAtual === numeroCapitulos) {
        capituloAtual = 1;
    }else {
        capituloAtual += 1;
        capitulo.textContent = `Capítulo ${capituloAtual}`
    }

    audioCapitulo.src = `./books//dom-casmurro/${capituloAtual}.mp3`;
    audioCapitulo.play();
}

function voltarFaixa() {
    if(capituloAtual === 1) {
        capituloAtual = numeroCapitulos;
    }else {
        capituloAtual -= 1;
        capitulo.textContent = `Capítulo ${capituloAtual}`
    }

    audioCapitulo.src = `./books//dom-casmurro/${capituloAtual}.mp3`;
    audioCapitulo.play();
}

botaoPlayPause.addEventListener('click', tocarOuPausar);
proximo.addEventListener('click', proximaFaixa)
anterior.addEventListener('click', voltarFaixa)