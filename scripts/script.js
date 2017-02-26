var myGamePiece;
var myObstacle1, myObstacle2, myObstacle3, myObstacle4, myObstacle5, myObstacle6, myObstacle7, myObstacle8, 
  myObstacle9, myObstacle10, myObstacle11, myObstacle12, myObstacle13, myObstacle14, myObstacle15, myObstacle16,
  myObstacle17, myObstacle18, myObstacle19, myObstacle20, myObstacle21, myObstacle22, myObstacle23, myObstacle24, 
  myObstacle25, myObstacle26, myObstacle27, myObstacle28, myObstacle29, myObstacle30, myObstacle31, myObstacle32, 
  myObstacle33, myObstacle34, myObstacle35, myObstacle36, myObstacle37, myObstacle38, myObstacle39, myObstacle40,
  myObstacle41, myObstacle42, myObstacle43, myObstacle44, myObstacle45, myObstacle46, myObstacle47, myObstacle48,
  myObstacle49, myObstacle50;
var Obstacles = new Array(50);
var keyW = false;
var keyA = false;
var keyS = false;
var keyD = false;
var crash_left = false;
var crash_right = false;
var crash_down = false;
var crash_up = false;
var myBlock;
var string;

function startGame() {
    myGamePiece = new component(25, 25, "images/blue_man.png", 25, 25, "image");
    myObstacle1  = new component(25, 25, "images/Border.jpeg", 300, 100, "image"); 
    Obstacles[0] = myObstacle1;
    myObstacle2  = new component(25, 25, "images/Border.jpeg", 300, 125, "image"); 
    Obstacles[1] = myObstacle2; 
    myObstacle3  = new component(25, 25, "images/Border.jpeg", 300, 150, "image"); 
    Obstacles[2] = myObstacle3;
    myObstacle4  = new component(25, 25, "images/Border.jpeg", 300, 175, "image");  
    Obstacles[3] = myObstacle4;
    myObstacle5  = new component(25, 25, "images/Border.jpeg", 300, 200, "image"); 
    Obstacles[4] = myObstacle5;
    myObstacle6  = new component(25, 25, "images/Border.jpeg", 300, 225, "image"); 
    Obstacles[5] = myObstacle6; 
    myObstacle7  = new component(25, 25, "images/Border.jpeg", 300, 250, "image"); 
    Obstacles[6] = myObstacle7;
    myObstacle8  = new component(25, 25, "images/Border.jpeg", 300, 275, "image"); 
    Obstacles[7] = myObstacle8; 
    myObstacle9  = new component(25, 25, "images/Border.jpeg", 300, 300, "image"); 
    Obstacles[8] = myObstacle9;
    myObstacle10  = new component(25, 25, "images/Border.jpeg", 300, 325, "image");  
    Obstacles[9] = myObstacle10;
    
    myBlock = new component(25, 25, "blue", 200, 200);   
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
      var crash_test = true;
      for (i=0; i<Obstacles.length; i++) {
           if (Obstacles[i]!=undefined){
            //Check to see if there is a crash with this obstacle
             if (myGamePiece.crashWith(Obstacles[i])){
               crash_test = false;
               break;
             }
          }
        }
      if (crash_test){
        moveright();
      }
      /*
      if (!myGamePiece.crashWith(myObstacle1) && !myGamePiece.crashWith(myObstacle2)) {
         moveright();
        }*/
      if (crash_right){
        moveleft();
        crash_right = false;
        for (i=0; i<Obstacles.length; i++) {
           if (Obstacles[i]!=undefined){
             myGamePiece.crashWith(Obstacles[i]);
          }
        }
        /*
        myGamePiece.crashWith(myObstacle1);
        !myGamePiece.crashWith(myObstacle2);*/
       }
      /*
      if (!myGamePiece.crashWith(myObstacle)) {
         moveright();
        }
      if (crash_right){
        moveleft();
        crash_right = false;
        myGamePiece.crashWith(myObstacle);
       }
       */
      break;
    case 83: //s
      keyW = false;
      keyA = false;
      keyS = true;
      keyD = false;
      console.log("keyW: "+keyW+" keyA: "+keyA+" keyS: "+keyS+" keyD: "+keyD);
      var crash_test = true;
      for (i=0; i<Obstacles.length; i++) {
           if (Obstacles[i]!=undefined){
            //Check to see if there is a crash with this obstacle
             if (myGamePiece.crashWith(Obstacles[i])){
               crash_test = false;
               break;
             }
          }
        }
      if (crash_test){
        movedown();
      }
      if (crash_down){
        moveup();
        crash_down = false;
        for (i=0; i<Obstacles.length; i++) {
           if (Obstacles[i]!=undefined){
             myGamePiece.crashWith(Obstacles[i]);
          }
        }
       }
      /*
      if (!myGamePiece.crashWith(myObstacle)) {
        movedown();
        }
      if (crash_down){
        moveup();
        crash_down = false;
        myGamePiece.crashWith(myObstacle);
       }*/
      break;
    case 65: //a
      keyW = false;
      keyA = true;
      keyS = false;
      keyD = false;
      console.log("keyW: "+keyW+" keyA: "+keyA+" keyS: "+keyS+" keyD: "+keyD);
      var crash_test = true;
      for (i=0; i<Obstacles.length; i++) {
           if (Obstacles[i]!=undefined){
            //Check to see if there is a crash with this obstacle
             if (myGamePiece.crashWith(Obstacles[i])){
               crash_test = false;
               break;
             }
          }
        }
      if (crash_test){
        moveleft();
      }
      if (crash_left){
        moveright();
        crash_left = false;
        for (i=0; i<Obstacles.length; i++) {
           if (Obstacles[i]!=undefined){
             myGamePiece.crashWith(Obstacles[i]);
          }
        }
       }
      /*
      if (!myGamePiece.crashWith(myObstacle)) {
         moveleft();
        }
      if (crash_left){
        moveright();
        crash_left = false;
        myGamePiece.crashWith(myObstacle);
       }*/
      break;
    case 87: //w
      keyW = true;
      keyA = false;
      keyS = false;
      keyD = false;
      console.log("keyW: "+keyW+" keyA: "+keyA+" keyS: "+keyS+" keyD: "+keyD);
      var crash_test = true;
      for (i=0; i<Obstacles.length; i++) {
           if (Obstacles[i]!=undefined){
            //Check to see if there is a crash with this obstacle
             if (myGamePiece.crashWith(Obstacles[i])){
               crash_test = false;
               break;
             }
          }
        }
      if (crash_test){
        moveup();
      }
      if (crash_up){
        movedown();
        crash_up = false;
        for (i=0; i<Obstacles.length; i++) {
           if (Obstacles[i]!=undefined){
             myGamePiece.crashWith(Obstacles[i]);
          }
        }
       }
      /*
      if (!myGamePiece.crashWith(myObstacle)) {
         moveup();
         }
      if (crash_up){
        movedown();
        crash_up = false;
        myGamePiece.crashWith(myObstacle);
       }*/
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

function component(width, height, color, x, y, type) {
    if (type == "image") {
        this.image = new Image();
        this.image.src = color;
    }
    this.width = width;
    this.height = height;  
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = myGameArea.context;
        if (type == "image") {
            ctx.drawImage(this.image, 
                this.x, 
                this.y,
                this.width, this.height);
        }
        else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
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

    this.getBlock = function(someblock){
      var myleft = this.x;
      var myright = this.x + (this.width);
      var mytop = this.y;
      var mybottom = this.y + (this.height);
      var blockleft = someblock.x;
      var blockright = someblock.x + (otherobj.width);
      var blocktop = someblock.y;
      var blockbottom = someblock.y + (otherobj.height);

      //Object completely passes over the block
      if ((mybottom > blockbottom) || (mytop < blocktop) || (myright > blockright) || (myleft < blockleft)) {
            console.log("works");
        }
    }
}

function updateGameArea() {
    myGameArea.clear();
    for (i=0; i<Obstacles.length; i++) {
      if (Obstacles[i]!=undefined){
          Obstacles[i].update();
      }
    }
    myBlock.update();
    myGamePiece.update();
}

function moveup() {
  //if you're not gonna move out of the screen {
  if (myGamePiece.y-25 >= 0){
    myGamePiece.y -= 25;
  }
}

function movedown() {
  if (myGamePiece.y+25 < 500){
    myGamePiece.y += 25;
  }
}

function moveleft() {
  if (myGamePiece.x-25 >= 0){
    myGamePiece.x -= 25;
  }
}

function moveright() {
  if (myGamePiece.x+25 < 800){
    myGamePiece.x += 25;
  }
}