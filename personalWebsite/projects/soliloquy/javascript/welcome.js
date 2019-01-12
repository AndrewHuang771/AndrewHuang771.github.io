

var canvas = document.querySelector('canvas');

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

var c = canvas.getContext('2d');

var mouse ={
  x:undefined,
  y:undefined
}

var counter=0;

window.addEventListener('resize',function(event){
  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;
})

window.addEventListener('mousemove',function(event){
  mouse.x=event.x;
  mouse.y=event.y;
  if(counter<5){
    animate();
  }
  counter++;
})

var radius=0;
var dr=2;

function explode(){
  dr=10;
  $(document).ready(function(){
    $(".mysteriousVoice").hide();
    $(".absolute").fadeOut(1500);
    setInterval(function(){
      window.location = "evil.html";
  },1500);
  });
}

function animate() {
  requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    c.beginPath();
    c.arc(mouse.x,mouse.y,radius,0,Math.PI*2, false);   //Creates an Outline, needs a stroke propriety
    c.strokeStyle='black';
    c.fillStyle = 'black'; 
    c.fill();
    radius+=dr;
    if(dr>0.025){
      dr-=0.025;
    }
}
