const Texture = PIXI.Texture;

const ballTexture = Texture.from('./assets/ball.png');
const cueTexture = Texture.from('./assets/cue.png');
const tableTexture = Texture.from('./assets/table.png');

init();

// Inicializa el juego
function init() {
    // Crea un nuevo objeto Pixi.js
    const app = new PIXI.Application({
        width: window.innerWidth / 1.2,
        height: window.innerHeight / 1.2,
        backgroundColor: 0x1099bb,
        resolution: window.devicePixelRatio || 1
    });

    // Añade el objeto Pixi.js al DOM
    document.getElementById('pool-container').appendChild(app.view);

    // Crea un contenedor para las bolas de billar
    const ballsContainer = new PIXI.Container();
    const table = new PIXI.Sprite(tableTexture);
    table.position.set(
        90,
        50
    );
    ballsContainer.addChild(table);
    app.stage.addChild(ballsContainer);

    // Crea una bola de billar
    const ball = new PIXI.Sprite(ballTexture);
    ball.position.set(400, 300);
    ballsContainer.addChild(ball);

    // Crea un contenedor para el taco de billar
    const cueContainer = new PIXI.Container();
    app.stage.addChild(cueContainer);

    // Crea el taco de billar
    const cue = new PIXI.Sprite(cueTexture);
    cue.position.set(400, 300);
    cueContainer.addChild(cue);

    // Actualiza la posición del taco en función del movimiento del mouse
    function onMouseMove(event) {

        console.log(event.movementY, event.movementX);

        cue.position.y = ball.position.y + (ball.width / 2);
        cue.position.x = ball.position.x + (ball.height / 2);

        cue.angle += 4;

    }

    // Registra el evento "mousemove" del objeto "window"
    window.addEventListener('mousemove', onMouseMove);

    // Comienza el bucle del juego
    app.ticker.add(() => {
        // Actualiza la posición de la bola de billar
        ball.position.x += 1;
    });
}
