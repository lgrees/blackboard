import p5 from 'p5';

let s = sk => {
  sk.setup = () => {
    sk.createCanvas(400, 400);
    sk.background(80);
  };

  sk.draw = () => {
    // sk.background(80);
    if (sk.mouseIsPressed) {
      sk.fill(1000);
      sk.stroke(1000);
      sk.ellipse(sk.mouseX, sk.mouseY, 10, 10);
    }
  };
};

export default new p5(s);
