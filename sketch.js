

let particles = []; //defines the particle array constructor component

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  for (let i = 0; i < 3; i++) { //displays particles with a limit on a loop
    particles.push(new Particle(200, 20)); //pushes the various particles to the display 
  }

  for (let particle of particles) {  //calls the force constructors
    let gravity = createVector(0, 0.2);
    particle.applyForce(gravity);
    particle.update();
    particle.show();
  }

  for (let i = particles.length - 1; i >= 0; i--) {
    if (particles[i].finished()) {
      particles.splice(i, 1);
    }
  }
}
