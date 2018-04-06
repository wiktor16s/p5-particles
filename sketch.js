let creatures = [];
let count = 2;

function setup() {
    createCanvas(800, 600);

    for (var i = 0; i < count; i++) {
        creatures[i] = new Ball();
    }
}

function draw() {
    background(0);

    for (var i = 0; i < creatures.length; i++) {
        creatures[i].move();
        creatures[i].bounce();
        creatures[i].draw();
    }

}