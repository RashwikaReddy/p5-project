function setup(){
    canvas = createCanvas(600,600);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,200,200,200,200);
    fill("green");
    stroke("red");
    rect(120,73,400,20);
    rect(120,515,400,20);
    rect(75,90,20,400);
    rect(515,90,20,400);
    fill("red");
    stroke("green");
    circle(80,80,100);
    circle(520,80,100);
    circle(80,520,100);
    circle(520,520,100);
}
function take_pic(){
    save("myselfie.png");
}