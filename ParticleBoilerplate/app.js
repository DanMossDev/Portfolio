//VARIABLES
let mouseRadius = 150; //radius in pixels around the mouse within with particles react
let mouseProximity = 200; //proximity within which mouse interaction will happen
let particleRadius = 3; //radius of the particles being created
let radiusRatio = 2; //Amount that radius is increased by on interaction
let particleCount = 100; //number of particles being created
let particleColor = 'white'; //colour of the drawn particles


//DOMS cache
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
//make canvas cover entire window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particleArray = [];

//Handle mouse movement
let mouse = {
    x: null,
    y: null,
    radius: 150
}
window.addEventListener("mousemove", function(e){ //listens for mouse movement and assigns this to the mouse object coordinates
    mouse.x = e.x;
    mouse.y = e.y;
})

//Handle drawing of text
context.fillStyle = 'white'; //sets the colour of the text
context.font = '30px Verdana'; //sets the size and family of the font
context.fillText("Daniel Moss", 40, 40); //arguments for the text being written, X coordinate on the canvas, and Y coordinate (4th argument for max width)

const data = context.getImageData(0, 0, 100, 100) //scans from top left to 100 pixels offset in x and y

class Particle {  //class that creates new objects with X and Y values passed as arguments.
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.size = particleRadius;
        this.baseX = this.x; //stores starting positions
        this.baseY = this.y;
        this.density = (Math.random() * 30) + 1;
    }
    draw(){
        context.fillStyle = particleColor;
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2); //draws an arc from x,y start angle to end angle; 0-2pi being a full circle
        context.closePath();
        context.fill()
    }
    update() {
        let dx = mouse.x - this.x; //mathematically, deltax and deltay
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy); //pythagoras theorem
        if (distance < mouseProximity) {
            this.size = particleRadius * radiusRatio;
        }
        else {
            this.size = particleRadius;
        }
    }
}

function initialise() {
    particleArray = [];
    for (let i = 0; i < particleCount; i++) {
        let x = (Math.random() * canvas.width);
        let y = (Math.random() * canvas.height);
        particleArray.push(new Particle(x, y));
    }
}

initialise();
console.log(particleArray);

function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height); //clears the whole canvas each frame
    for (let i = 0; i < particleArray.length; i++){
        particleArray[i].draw();
        particleArray[i].update();
    }
    requestAnimationFrame(animate); //recursively calls itself
}

animate();