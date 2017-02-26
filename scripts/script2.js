var myGamePiece;
var myObstacle;
var keyW = false;
var keyA = false;
var keyS = false;
var keyD = false;
var crash_left = false;
var crash_right = false;
var crash_down = false;
var crash_up = false;

function startGame() {
    myGamePiece = new component(30, 30, "red", 10, 120);
    myObstacle  = new component(10, 200, "green", 300, 120);    
    myGameArea.start();
}

window.addEventListener("keydown", onKeyDown, false);
window.addEventListener("keyup", onKeyUp, false);

function onKeyDown(event) {
  var keyCode = event.keyCode;
  switch (keyCode) {
    case 68: //d
      keyW = false;
      keyA = false;
      keyS = false;
      keyD = true;
      console.log("keyW: "+keyW+" keyA: "+keyA+" keyS: "+keyS+" keyD: "+keyD);
      if (!myGamePiece.crashWith(myObstacle)) {
         moveright();
        }
      if (crash_right){
        moveleft();
        crash_right = false;
        myGamePiece.crashWith(myObstacle);
       }
      break;
    case 83: //s
      keyW = false;
      keyA = false;
      keyS = true;
      keyD = false;
      console.log("keyW: "+keyW+" keyA: "+keyA+" keyS: "+keyS+" keyD: "+keyD);
      if (!myGamePiece.crashWith(myObstacle)) {
        movedown();
        }
      if (crash_down){
        moveup();
        crash_down = false;
        myGamePiece.crashWith(myObstacle);
       }
      break;
    case 65: //a
      keyW = false;
      keyA = true;
      keyS = false;
      keyD = false;
      console.log("keyW: "+keyW+" keyA: "+keyA+" keyS: "+keyS+" keyD: "+keyD);
      if (!myGamePiece.crashWith(myObstacle)) {
         moveleft();
        }
      if (crash_left){
        moveright();
        crash_left = false;
        myGamePiece.crashWith(myObstacle);
       }
      break;
    case 87: //w
      keyW = true;
      keyA = false;
      keyS = false;
      keyD = false;
      console.log("keyW: "+keyW+" keyA: "+keyA+" keyS: "+keyS+" keyD: "+keyD);
      if (!myGamePiece.crashWith(myObstacle)) {
         moveup();
         }
      if (crash_up){
        movedown();
        crash_up = false;
        myGamePiece.crashWith(myObstacle);
       }
      break;
  }
} 

function onKeyUp(event) {
  var keyCode = event.keyCode;
  switch (keyCode) {
    case 68: //d
      keyD = false;
      break;
    case 83: //s
      keyS = false;
      break;
    case 65: //a
      keyA = false;
      break;
    case 87: //w
      keyW = false;
      break;
  }
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
        var myxmiddle = this.x + (this.width/2);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var myymiddle = this.y + (this.height/2);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var otherxmiddle = otherobj.x + (otherobj.width/2);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var otherymiddle = otherobj.y + (otherobj.height/2);
        var crash = true;
        /*
        var crash_left = false;
        var crash_right = false;
        var crash_down = false;
        var crash_up = false;
        */
        console.log("My middle: "+myxmiddle+" Other middle: "+otherxmiddle);
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        if (crash) {
            //Object is to the left of the obstacle
            if (myxmiddle < otherxmiddle) {
                crash_right = true;
            }
            //Object is to the right of the obstacle
            else if (myxmiddle > otherxmiddle) {
                crash_left = true;
            }
            //Object is above the obstacle
            else if (myymiddle > otherymiddle){
                crash_up = true;
            }
            //Object is below the obstacle
            else {
                crash_down = true;
            }
        }
        console.log("LeftCrash status: "+crash_left+" RightCrash status: "+crash_right+" DownCrash status: "+crash_down+" CrashUp status: "+crash_up);
        console.log("Crash status: "+crash);
        return crash;
    }
}

function updateGameArea() {
    myGameArea.clear();
    myObstacle.update();
    myGamePiece.update();
}
/*
function updateGameArea() {
    if (myGamePiece.crashWith(myObstacle) && keyD == true) {
        console.log("this is bad");
        myGameArea.clear();
        myObstacle.update();
        /*myGamePiece.x += -1;
        myGamePiece.y += myGamePiece.speedY;    
        myGamePiece.update();
    } else if (myGamePiece.crashWith(myObstacle) && keyA == true) {
        myGameArea.clear();
        myObstacle.update();
        myGamePiece.x += 1;
        myGamePiece.y += myGamePiece.speedY;    
        myGamePiece.update();
    } else if (myGamePiece.crashWith(myObstacle) && keyW == true) {
        myGameArea.clear();
        myObstacle.update();
        myGamePiece.x += myGamePiece.speedX;
        myGamePiece.y += 1;    
        myGamePiece.update();
    } else if (myGamePiece.crashWith(myObstacle) && keyS == true) {
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
}*/

function moveup() {
    myGamePiece.y -= 10;
}

function movedown() {
    myGamePiece.y += 10;
}

function moveleft() {
    myGamePiece.x -= 10;
}

function moveright() {
    myGamePiece.x += 10;
    /*
    myGamePiece.speedX = 1; 
    direction = "right";*/
}