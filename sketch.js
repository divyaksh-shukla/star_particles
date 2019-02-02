var stars = [];
var n_stars = 200;
var thresh = 80;
var mouseThresh = 50;

function setup() {
    createCanvas(600, 600);
    for (var i = 0 ; i < n_stars ; i++) {
        stars[i] = new Star();
    }
}

function draw() {
    background(0, 0, 40);
    for (var i = 0 ; i < n_stars ; i++) {
        if(stars[i].offscreen()){
            stars.splice(i, 1, new Star());
        }
        stars[i].update();
    }

    for (var i = 0 ; i < n_stars ; i++) {
        stars[i].cluster(stars);
        stars[i].show();
    }
}