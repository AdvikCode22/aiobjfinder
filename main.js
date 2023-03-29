function setup(){
    canvas = createCanvas(550,400)
    canvas.center()

    camera = createCapture(VIDEO)
    camera.hide()
}

function draw(){
    image(camera,0,0,550,400)
}