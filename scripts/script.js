var myGamePiece;
var myObstacle;

function startGame() {
    myGamePiece = new component(25, 25, "red", 10, 120);
    myObstacle  = new component(25, 25, "black", 0, 0);
    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 800;
        this.canvas.height = 500;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
        clearInterval(this.interval);
    }
}

function component(width, height, color, x, y) {
    





    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;    
    
    this.update = function() {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    



    this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        return crash;
    }
}

function updateGameArea() {
    if (myGamePiece.crashWith(myObstacle) && direction=="right") {
        myGameArea.clear();
        myObstacle.update();
        myGamePiece.x += -1;
        myGamePiece.y += myGamePiece.speedY;    
        myGamePiece.update();
    }else if (myGamePiece.crashWith(myObstacle) && direction=="left") {
        myGameArea.clear();
        myObstacle.update();
        myGamePiece.x += 1;
        myGamePiece.y += myGamePiece.speedY;    
        myGamePiece.update();
    }else if (myGamePiece.crashWith(myObstacle) && direction=="up") {
        myGameArea.clear();
        myObstacle.update();
        myGamePiece.x += myGamePiece.speedX;
        myGamePiece.y += 1;    
        myGamePiece.update();
    }else if (myGamePiece.crashWith(myObstacle) && direction=="down") {
        myGameArea.clear();
        myObstacle.update();
        myGamePiece.x += myGamePiece.speedX;
        myGamePiece.y += -1;    
        myGamePiece.update();
    } else {
        myGameArea.clear();
        myObstacle.update();
        myGamePiece.x += myGamePiece.speedX;
        myGamePiece.y += myGamePiece.speedY;    
        myGamePiece.update();
    }
}

var direction;

function moveup() {
    myGamePiece.speedY = -1; 
    direction = "up";
}

function movedown() {
    myGamePiece.speedY = 1; 
    direction = "down";
}

function moveleft() {
    myGamePiece.speedX = -1; 
    direction = "left";
}

function moveright() {
    myGamePiece.speedX = 1; 
    direction = "right";
}

function clearmove() {
    myGamePiece.speedX = 0; 
    myGamePiece.speedY = 0; 
}