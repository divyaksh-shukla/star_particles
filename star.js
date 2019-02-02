function Star() {
    this.x = random(width);
    this.y = random(height);
    this.xspeed = random(-0.35,0.35);
    this.yspeed = random(-0.35,0.35);

    this.show = function() {
        fill(255, 255, 255, 70);
        ellipse(this.x, this.y, 3, 3);
    }

    this.update = function() {
        this.x = this.x + this.xspeed;
        this.y = this.y + this.yspeed;

        // distToMouse = dist(this.x, this.y, mouseX, mouseY);
        // if(distToMouse < mouseThresh) {
        //     let base = dist(this.x, mouseY, mouseX, mouseY);
        //     this.x = mouseThresh * cos(acos(base/distToMouse));

        //     let height = dist(mouseX, this.y, mouseX, mouseY);
        //     this.y = mouseThresh * sin(asin(height/distToMouse));
        // }
    }

    this.offscreen = function() {
        if(this.x < width && this.x > 0 && this.y < height && this.y > 0) {
            return false;
        }
        else {
            return true;
        }
    }

    this.cluster = function(stars) {
        for (var i = 0 ; i < n_stars ; i++) {
            // console.log(dist(this.x, this.y, stars[i].x, stars[i].y));
            if(dist(this.x, this.y, stars[i].x, stars[i].y) < thresh) {
                // console.log("cluster");
                stroke(150, 150, 150, 30);
                line(this.x, this.y, stars[i].x, stars[i].y);
            }
        }
    }
}