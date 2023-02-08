noseX=0;
noseY=0;

function preload(){
moostash=loadImage("https://i.postimg.cc/tCym0bxF/moostash.png");
}

function setup(){
canvas=createCanvas(400,300);
canvas.position(450,200);
video=createCapture(VIDEO);
video.size(400,300);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function draw(){
image(video,0,0,400,300);
image(moostash,noseX,noseY,50,50);
}

function mustache_filter_pic_png(){
    save("mustache_pic.png");
}

function mustache_filter_pic_jpg(){
    save("mustache_pic.jpg");
}

function modelLoaded(){
    console.log("Model loaded! 'p5.js' and 'poseNet'.");
}

function gotPoses(results){
if(results.length>0){
    console.log("Nose X= "+results[0].pose.nose.x+"!");
    console.log("Nose Y= "+results[0].pose.nose.y+"!");
    noseX=results[0].pose.nose.x-20;
noseY=results[0].pose.nose.y-15;
}
}