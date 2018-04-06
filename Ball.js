function Ball() {

    let R = 0;
    let G = 255;
    let B = 0;

    let randTime = random(3, 5);

    this.location = new p5.Vector(width / 2, height / 2);
    this.velocity = createVector(random(-3, 3), random(-3, 3));

    this.move = function() {
        this.location.add(this.velocity);
        this.velocity = createVector(random(-6, 6), random(-6, 6));
    }

    this.bounce = function() {
        if ((this.location.x > width) || (this.location.x < 0)) {
            this.velocity.x = (this.velocity.x * (-1));
        } else if ((this.location.y > height) || (this.location.y < 0)) {
            this.velocity.y = (this.velocity.y * (-1));
        }

    }


    this.draw = function() {
        fill(random(0, 255), random(0, 255), random(0, 255));
        ellipse(this.location.x, this.location.y, 10, 10);

    }


}