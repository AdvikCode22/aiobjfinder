status = ""

function setup(){
    canvas = createCanvas(550,400)
    canvas.center()

    camera = createCapture(VIDEO)
    camera.hide()
}

function draw(){
    image(camera,0,0,550,400)
}

function start(){
    model = ml5.objectDetector('cocossd' , modelLoaded)
    document.getElementById("status").innerHTML = "Status: Detecting Objects"
    user_input = document.getElementById("input").value
    console.log(user_input)
}

function modelLoaded(){
    console.log("Model has been loaded.")
    status = true
}