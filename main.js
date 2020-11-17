let sliceSlider;
var numOfSlices;
var inc;

function setup() {
  createCanvas(windowWidth - 18, windowHeight - 18, WEBGL);
  sliceSlider = createSlider(0,50,20);
  sliceSlider.position(50,50);
}

function draw() {
  background('black');
  orbitControl();
  ellipseMode(CENTER);
  fill('deeppink');
  stroke('blueviolet');
  numOfSlices = sliceSlider.value();
  inc = 500/numOfSlices;
  for(var i = 0;i<=500;i+=inc){
    var x = map(i,0,500,-250,250);
    var r = Math.sqrt(62500 - (x*x));
    push();
    translate((250-i),0,0);
    rotateY(HALF_PI);
    ellipse(0,0,2*r,2*r);
    pop();
  }
}

function preventBehavior(e){
  e.preventDefault();
}
document.addEventListener("touchmove",preventBehavior,{passive: false});

