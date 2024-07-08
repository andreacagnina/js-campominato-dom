function CreaUnQuadrato() {
    let square = document.createElement('div');
    square.className = ('content width10');
    return square;
}

function randomNum() {
    let j = 0;
    while (j < 16) {
        let randomNum = Math.floor(Math.random() * 16 + 1);
        j++;
    }
}



document.getElementById('btn_start').addEventListener('click', function () {
    const contenitore = document.getElementById('container');
    contenitore.innerHTML = '';

    let livello = document.getElementById('level').value;
    console.log(livello)

    if (livello == 1) {

        for (let i = 1; i < 101; i++) {
            let selSquare = CreaUnQuadrato();
            selSquare.addEventListener('click', function () {
                this.className += (' bg_cel');
                console.log(i);
            });
            selSquare.innerText = i;
            contenitore.append(selSquare);
        };
        let random = randomNum();
        console.log(random)
    }


    else if (livello == 2) {
        for (let i = 1; i < 82; i++) {
            let selSquare = CreaUnQuadrato();
            selSquare.classList.replace('width10', 'width9');
            selSquare.addEventListener('click', function () {
                this.className += (' bg_cel');
                console.log(i);
            });
            selSquare.innerText = i;
            contenitore.append(selSquare);
        };
    }
    else if (livello == 3) {
        for (let i = 1; i < 50; i++) {
            let selSquare = CreaUnQuadrato();
            selSquare.classList.replace('width10', 'width7');
            selSquare.addEventListener('click', function () {
                this.className += (' bg_cel');
                console.log(i);
            });
            selSquare.innerText = i;
            contenitore.append(selSquare);
        };

    }


});
