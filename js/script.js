function CreaUnQuadrato() {
    let square = document.createElement('div');
    square.className = ('content width10');
    return square;
}

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



document.getElementById('btn_start').addEventListener('click', function () {
    const contenitore = document.getElementById('container');
    contenitore.innerHTML = '';
    let bombs = [];

    let livello = document.getElementById('level').value;
    console.log(livello)
    let maxCels = 100;
    let grid = 'width10';

    if (livello == 2) {
        maxCels = 81;
        grid = 'width9';
    } else if (livello == 3) {
        maxCels = 49;
        grid = 'width7';
    }
    bombs = createdBombs(maxCels);



    for (let i = 1; i <= maxCels; i++) {
        let selSquare = CreaUnQuadrato();
        selSquare.classList.add(grid);

        selSquare.addEventListener('click', function () {
            this.className += (' bg_cel');
            console.log(i);
        });

        selSquare.innerText = i;
        contenitore.append(selSquare);
    };


    console.log(bombs)

});
