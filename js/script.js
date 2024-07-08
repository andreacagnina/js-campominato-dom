// una funzione che crea un quadrato e lo restituisce
function CreaUnQuadrato() {
    let square = document.createElement('div');
    square.className = ('content width10');
    return square;
}

// una funzione con parametro che crea un array vuoto dove il numero massimo di elementi che contiene è 16. Tramite if il contenuto viene aggiunto all'array solo se il valore randomico generato non è già presente
function createdBombs(max) {
    const bombsCreated = [];

    while (bombsCreated.length < 16) {
        let randomNum = Math.floor(Math.random() * max + 1);

        if (!bombsCreated.includes(randomNum)) {
            bombsCreated.push(randomNum);
        }
    }
    return bombsCreated;
}


// Allo start ho un innerhtml che mi ripulisce il Contentenuto, un array vuoto in cui verrà iniettata la funzione alla quale parametro corrisponde alle variabili del numero di cell massime per livello. Come valore di default sono state date quelle del 1° livello che poi verrano sovrascritte dall'if che inizializza n° di celle e width
document.getElementById('btn_start').addEventListener('click', function () {
    const contenitore = document.getElementById('container');
    contenitore.innerHTML = '';
    let bombs = [];

    let livello = document.getElementById('level').value;
    console.log(livello)

    let score = 0;

    // valore di default 1° livello, giusto per creare le variabili e non fare delle variabili 0 e un ulteriore if
    let maxCels = 100;
    let col = 'width10';

    if (livello == 2) {
        maxCels = 81;
        col = 'width9';

    } else if (livello == 3) {
        maxCels = 49;
        col = 'width7';
    }

    // l'array vuoto prende i valori dalla funzione e dalle variabili maxcels
    bombs = createdBombs(maxCels);

    // Ciclo per creare tanti quadrati quante sono le MaxCels. Ogni quadrato sarà clickabile e prenderà una classe per colorarsi.
    for (let i = 1; i <= maxCels; i++) {
        let selSquare = CreaUnQuadrato();
        selSquare.classList.add(col);

        selSquare.addEventListener('click', function () {

            if (bombs.includes(i)) {
                selSquare.classList.add('bg_red');
                alert(`BOOM! Hai totalizzato ${score} punti`);
            }
            else if (!bombs.includes(i) && !selSquare.classList.contains('bg_cel')) {
                selSquare.classList.add('bg_cel');
                score++;
                console.log(score);
            }
        });

        selSquare.innerText = i;
        contenitore.append(selSquare);
    };


    console.log(bombs)

});
