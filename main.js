function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    video.position(50,85);

    canvas = createCanvas(550,500);
    canvas.position(750,85);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet is initialized!');
}

function draw(){
    background('rgb(153, 152, 152)');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}