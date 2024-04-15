document.addEventListener("DOMContentLoaded", () => {

    const scoreDisplay = document.getElementById("score");
    const grid = document.querySelector('.grid');
    const width = 28;
    let score = 0;
    let level = 0;
    //0 - punts
    //1 - mur
    //2 - fantasma
    //3 - poder
    //4 - nada

    const layout = [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 3, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1,
        1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 3, 1, 1, 0, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 1, 0, 1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1,
        1, 0, 1, 1, 1, 1, 1, 0, 1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1,
        1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
        1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 4, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
        1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1,
        1, 0, 1, 0, 3, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1,
        0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 3, 0, 0, 1, 0, 0, 1,
        1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 4, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
        1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1,
        1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1,
        1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1,
        1, 0, 1, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 3, 0, 1, 0, 1, 1,
        1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1,
        1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1,
        1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
    ]

    
    const layout2 = [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 3, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1,
        1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 3, 1, 1, 0, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 1, 0, 1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1,
        1, 0, 1, 1, 1, 1, 1, 0, 1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1,
        1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
        1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 4, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
        1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1,
        1, 0, 1, 0, 3, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1,
        0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 3, 0, 0, 1, 0, 0, 1,
        1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
        1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1,
        1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1,
        1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1,
        1, 0, 1, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 3, 0, 1, 0, 1, 1,
        1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1,
        1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1,
        1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
    ]
    const layout3 = [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 3, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1,
        1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 3, 1, 1, 0, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 1, 0, 1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1,
        1, 0, 1, 1, 1, 1, 1, 0, 1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1,
        1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
        1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 4, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
        1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1,
        1, 0, 1, 0, 3, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1,
        0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 3, 0, 0, 1, 0, 0, 1,
        1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
        1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1,
        1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1,
        1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1,
        1, 0, 1, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 3, 0, 1, 0, 1, 1,
        1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1,
        1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1,
        1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
    ]
    const cuadrados = [];
    function createBoard(layout) {
        for (let i = 0; i < layout.length; i++) {
            const cuadro = document.createElement('div');
            cuadro.id=i;
            grid.appendChild(cuadro);
            cuadrados.push(cuadro);

            if (layout[i] === 0) {
                cuadrados[i].classList.add('puntets');
            }
            if (layout[i] === 1) {
                cuadrados[i].classList.add('muro');
            }
            if (layout[i] === 2) {
                cuadrados[i].classList.add('fantasma');
            }
            if (layout[i] === 3) {
                cuadrados[i].classList.add('poder');
            }
            if (layout[i] === 4) {

            }

        }
    }

    createBoard(layout);
    console.log(cuadrados);


    let pacmanIndex = 349;
    cuadrados[pacmanIndex].classList.add('pacman');


    function movepacman(tecla) {
        cuadrados[pacmanIndex].classList.remove('pacman');
        if (tecla.key === 'ArrowUp' && layout[pacmanIndex - width] !== 1) {
            pacmanIndex -= width;
            if (pacmanIndex == 12) {
                pacmanIndex = 349;
            }

        }
        if (tecla.key === 'ArrowDown' && layout[pacmanIndex + width] !== 1) {
            pacmanIndex += width;
            if (pacmanIndex == 349) {
                pacmanIndex = 12;
            }
        }
        if (tecla.key === 'ArrowLeft' && layout[pacmanIndex - 1] !== 1) {
            pacmanIndex -= 1;
        }
        if (tecla.key === 'ArrowRight' && layout[pacmanIndex + 1] !== 1) {
            pacmanIndex += 1;
        }


        cuadrados[pacmanIndex].classList.add('pacman');
        puntos();
        poma();
        win();
        win2();
        win3();
        gameover();

    }

    function puntos() {
        if (cuadrados[pacmanIndex].classList.contains('puntets')) {
            score++;
            scoreDisplay.innerHTML = score;
            cuadrados[pacmanIndex].classList.remove('puntets')
        }

    }
    function poma(){
        if (cuadrados[pacmanIndex].classList.contains('poder')) {
            score += 10;
            scoreDisplay.innerHTML = score;

            ghosts.forEach(fantasma => fantasma.asustat= true);
            setTimeout(relax,10000)

            cuadrados[pacmanIndex].classList.remove('poder')
        }
    }

   

    function relax(){
        ghosts.forEach(fantasma => fantasma.asustat= false);
    }

    class Ghost{
        constructor(className, startIndex, vel){
            this.className = className;
            this.startIndex = startIndex;
            this.velocity = vel;
            this.ghostIndex = startIndex;
            this.asustat = false;
            this.timerId = NaN;
        }
    }


    ghosts = [
        new Ghost('f1', 235, 400),
        new Ghost('f2', 263, 500),
        new Ghost('f3', 238, 250),
        new Ghost('f4', 268, 300)
    ];

    console.log(ghosts)

    ghosts.forEach(ghost => {
        cuadrados[ghost.ghostIndex].classList.add(ghost.className);
        cuadrados[ghost.ghostIndex].classList.add('ghost');
    });

    ghosts.forEach(ghost => moveghost(ghost));

    function moveghost(ghost) {
        console.log(ghost);
        const directions = [-1,1, width, -width];
        
        let direction = directions[Math.floor(Math.random() * directions.length)];

            ghost.timerId = setInterval(function(){
                    
                
                

                while (cuadrados[ghost.ghostIndex + direction].classList.contains('muro') / cuadrados[ghost.ghostIndex + direction].classList.contains('ghost')) {

                    direction = directions[Math.floor(Math.random() * directions.length)];
                }
                cuadrados[ghost.ghostIndex].classList.remove(ghost.className, 'ghost', 'fasustado');
                ghost.ghostIndex += direction;
                cuadrados[ghost.ghostIndex].classList.add(ghost.className, 'ghost');

                if(ghost.asustat){
                    cuadrados[ghost.ghostIndex].classList.add(ghost.className, 'fasustado');
                }

                if(ghost.asustat && cuadrados[ghost.ghostIndex].classList.contains('pacman')){
                    cuadrados[ghost.ghostIndex].classList.remove('fasustado', 'ghost', ghost.className);
                    ghost.ghostIndex = ghost.startIndex;
                    ghost.asustat = false;
                    //score += 100;
                    //scoreDisplay.innerHTML = score;
                    cuadrados[ghost.ghostIndex].classList.add('ghost', ghost.className);
                }   
                gameover();
            }, ghost.velocity);
        
  

    };
    document.addEventListener('keyup', movepacman);
    function gameover(){
        if(cuadrados[pacmanIndex].classList.contains('ghost') &&
        !cuadrados[pacmanIndex].classList.contains('fasustado')){
            ghosts.forEach(f => clearInterval(f.timerId))
            document.removeEventListener('keyup', movepacman);
            setTimeout(function(){
                alert("Has Perdut")
            },500)
            cuadrados[pacmanIndex].classList.remove('pacman');
            pacmanIndex=349;
            score =0;
            cuadrados[pacmanIndex].classList.add('pacman');
                    document.addEventListener('keyup', movepacman);
                   
                    ghosts.forEach(ghost => {
                        cuadrados[ghost.ghostIndex].classList.add(ghost.className);
                        cuadrados[ghost.ghostIndex].classList.add('ghost');
                    });
                
                    ghosts.forEach(ghost => moveghost(ghost));
            scoreDisplay.innerHTML = score;
            
        }
    }
    function win(){
        if(score == 100 && level == 0){
            ghosts.forEach(m => clearInterval(m.timerId))
            document.removeEventListener('keyup', movepacman);
            setTimeout(function(){
                alert("Has Guanyat")
                cuadrados.forEach(c=>{
                    c.classList = "";
                })
                    createBoard(layout2);
                    pacmanIndex=349;
                    cuadrados[pacmanIndex].classList.add('pacman');
                    document.addEventListener('keyup', movepacman);
                   
                    ghosts.forEach(ghost => {
                        cuadrados[ghost.ghostIndex].classList.add(ghost.className);
                        cuadrados[ghost.ghostIndex].classList.add('ghost');
                    });
                
                    ghosts.forEach(ghost => moveghost(ghost));
                    
                
                
                
            },500)
        }
        
    }
    function win2(){
        if(score == 200 && level == 0){
            ghosts.forEach(m => clearInterval(m.timerId))
            document.removeEventListener('keyup', movepacman);
            setTimeout(function(){
                alert("Has Guanyat")
                cuadrados.forEach(c=>{
                    c.classList = "";
                })
                    createBoard(layout2);
                    pacmanIndex=349;
                    cuadrados[pacmanIndex].classList.add('pacman');
                    document.addEventListener('keyup', movepacman);
                   
                    ghosts.forEach(ghost => {
                        cuadrados[ghost.ghostIndex].classList.add(ghost.className);
                        cuadrados[ghost.ghostIndex].classList.add('ghost');
                    });
                
                    ghosts.forEach(ghost => moveghost(ghost));
                    
                
                
                
            },500)
        }
        
    }
    function win3(){
        if(score == 300 && level == 0){
            ghosts.forEach(m => clearInterval(m.timerId))
            document.removeEventListener('keyup', movepacman);
            setTimeout(function(){
                alert("Has Guanyat")
               
  
            },500)
        }
        
    }
    });
