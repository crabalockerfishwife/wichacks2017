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
var myBlock1;
var myBlock2;
var myBlock3;
var gotBlock1 = false;
var gotBlock2 = false;
var gotBlock3 = false;
var youwon = false;
var tryagain = false;
var initialization_string = "The Blue Man needs your help forming an if-else statement!<br>Use ASWD to move.";

function startGame() {
    document.getElementById("block1").innerHTML = initialization_string;
    myGamePiece = new component(25, 25, "images/blue_man.png", 50, 50, "image");
    myObstacle1  = new component(25, 400, "images/sideA.png", 0, 0, "image"); 
    Obstacles[0] = myObstacle1;
    myObstacle2  = new component(100, 25, "images/sideB.png", 25, 0, "image"); 
    Obstacles[1] = myObstacle2; 
    myObstacle3  = new component(100, 125, "images/TreeD.png", 125, 0, "image"); 
    Obstacles[2] = myObstacle3;
    myObstacle4  = new component(600, 100, "images/Big_Cliff.png", 0, 400, "image");  
    Obstacles[3] = myObstacle4;
    myObstacle5  = new component(550, 25, "images/SideC.png", 225, 0, "image"); 
    Obstacles[4] = myObstacle5;
    myObstacle6  = new component(25, 475, "images/SideD.png", 775, 0, "image"); 
    Obstacles[5] = myObstacle6; 
    myObstacle7  = new component(175, 25, "images/SideE.png", 600, 475, "image"); 
    Obstacles[6] = myObstacle7;
    myObstacle8  = new component(100, 125, "images/ATree.png", 500, 125, "image"); 
    Obstacles[7] = myObstacle8; 
    myObstacle9  = new component(175, 50, "images/cliff.png", 600, 200, "image"); 
    Obstacles[8] = myObstacle9;
    myObstacle10  = new component(50, 50, "images/CTree.png", 325, 150, "image");  
    Obstacles[9] = myObstacle10;
    myObstacle11  = new component(50, 150, "images/BushA.png", 325, 200, "image");  
    Obstacles[10] = myObstacle11;
    myObstacle12  = new component(75, 75, "images/BTree.png", 250, 275, "image");  
    Obstacles[11] = myObstacle12;
    myObstacle13  = new component(75, 75, "images/BTree.png", 175, 325, "image");  
    Obstacles[12] = myObstacle13;
    myObstacle14  = new component(50, 50, "images/CTree.png", 250, 350, "image");  
    Obstacles[13] = myObstacle14;
    myObstacle15  = new component(50, 50, "images/CTree.png", 300, 350, "image");  
    Obstacles[14] = myObstacle15;
    /*
    myObstacle16  = new component(50, 150, "images/BushA.png", 600, 200, "image");  
    Obstacles[15] = myObstacle16;*/
    
    myBlock1 = new component(25, 25, "#FFFF4D", 125, 275); //Block1 is yellow  
    myBlock2 = new component(25, 25, "#4D4DFF", 650, 100); //Block2 is blue 
    myBlock3 = new component(25, 25, "#FF1A1A", 675, 375); //Block3 is red  
    myGameArea.start();
}

window.addEventListener("keydown", onKeyDown, false);
window.addEventListener("keyup", onKeyUp, false);

function onKeyDown(event) {
  var keyCode = event.keyCode;
  if (document.getElementById("block1").innerHTML == initialization_string) {
    document.getElementById("block1").innerHTML = "";
  }
  switch (keyCode) {
    case 68: //d
      keyW = false;
      keyA = false;
      keyS = false;
      keyD = true;
      //console.log("keyW: "+keyW+" keyA: "+keyA+" keyS: "+keyS+" keyD: "+keyD);
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
      //console.log("keyW: "+keyW+" keyA: "+keyA+" keyS: "+keyS+" keyD: "+keyD);
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
      //console.log("keyW: "+keyW+" keyA: "+keyA+" keyS: "+keyS+" keyD: "+keyD);
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
      //console.log("keyW: "+keyW+" keyA: "+keyA+" keyS: "+keyS+" keyD: "+keyD);
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
    case 72: //h
      keyH = false;
      break;
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
        /*
        console.log("#######");
        console.log(otherobj);
        console.log("My right: "+myright+" Other left: "+otherleft);
        console.log("My left: "+myleft+" Other right: "+otherright);
        console.log("My top: "+mytop+" Other bottom: "+otherbottom);
        console.log("My bottom: "+mybottom+" Other top: "+othertop);
        console.log("My x middle: "+myxmiddle+" Other x middle: "+otherxmiddle);
        console.log("My y middle: "+myymiddle+" Other y middle: "+otherymiddle);*/
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
            crash_right = false;
            crash_left = false;
            crash_up = false;
            crash_down = false;
        }
        if (crash) {
            //Object is to the left of the obstacle
            if (myxmiddle < otherxmiddle) {
                //Object is within proximity of the obstacle to its right so it's crashing into it on the right
                if (myright == otherleft){
                  crash_right = true;
                }
                /*
                crash_left = false;
                crash_up = false;
                crash_down = false;*/
            }
            //Object is to the right of the obstacle
            if ((myxmiddle > otherxmiddle)) {
              //Object is within proximity of the obstacle to its left so it's crashing into it on the left
              if (myleft == otherright){
                crash_left = true;
              }
            }
            //Object is below the obstacle
            if ((myymiddle > otherymiddle)){
              //Object is within proximity of the obstacle above it so it's crashing into it above
              if (mytop == otherbottom){
                crash_up = true;
              }
            }
            //Object is above the obstacle
            if ((myymiddle < otherymiddle)){
              //Object is within proximity of the obstacle below it so it's crashing into it below
              if (mybottom == othertop){
                crash_down = true;
              }
            }
            //Four corner cases...set variables to false in these cases
            if (crash_right && crash_down) {
              crash_right = false;
              crash_down = false;
              crash = false;
            }
            if (crash_right && crash_up) {
              crash_right = false;
              crash_up = false;
              crash = false;
            }
            if (crash_left && crash_down) {
              crash_left = false;
              crash_down = false;
              crash = false;
            }
            if (crash_left && crash_up) {
              crash_left = false;
              crash_up = false;
              crash = false;
            }
            /*
            else {
                crash_right = false;
                crash_left = false;
                crash_up = false;
                crash_down = false;
            }*/
        }
        /*
        console.log("LeftCrash status: "+crash_left+" RightCrash status: "+crash_right+" DownCrash status: "+crash_down+" CrashUp status: "+crash_up);
        console.log("Crash status: "+crash);*/
        return crash;
    }

    this.getBlock = function(someblock){
      var myleft = this.x;
      var myright = this.x + (this.width);
      var mytop = this.y;
      var mybottom = this.y + (this.height);
      var blockleft = someblock.x;
      var blockright = someblock.x + (someblock.width);
      var blocktop = someblock.y;
      var blockbottom = someblock.y + (someblock.height);
     //Object completely passes over the block
      if ((mybottom == blockbottom) && (mytop == blocktop) && (myright == blockright) && (myleft == blockleft)) {
            //console.log("hit block");
            // The character is over block 1
            if (someblock == myBlock1) {
                gotBlock1 = true;
                //console.log("on block1");
                if (!gotBlock2 && !gotBlock3) {
                  document.getElementById("block1").innerHTML="else if (some_other_condition) {<br>do_something_else}";
                  document.getElementById("block1").className="filled";
                }
                if ((gotBlock2 && !gotBlock3) || (!gotBlock2 && gotBlock3)) {
                  if (document.getElementById("block2").className=="empty"){
                    document.getElementById("block2").innerHTML="else if (some_other_condition) {<br>do_something_else}";
                    document.getElementById("block2").className="filled";
                   }
                 } 
                if (gotBlock2 && gotBlock3) {
                  if (document.getElementById("block3").className=="empty"){
                    document.getElementById("block3").innerHTML="else if (some_other_condition) {<br>do_something_else}";
                    document.getElementById("block3").className="filled";
                  }
                }
            }
            // The character is over block 2
            if (someblock == myBlock2) {
              gotBlock2 = true;
              //console.log("on block2");
              if (!gotBlock1 && !gotBlock3) {
                document.getElementById("block1").innerHTML="if (some_condition) {<br>do_something}";
                document.getElementById("block1").className="filled";
              }
              if ((gotBlock1 && !gotBlock3) || (!gotBlock1 && gotBlock3)) {
                if (document.getElementById("block2").className=="empty"){
                  document.getElementById("block2").innerHTML="if (some_condition) {<br>do_something}";
                  document.getElementById("block2").className="filled";
                }
              } 
              if (gotBlock1 && gotBlock3) {
                if (document.getElementById("block3").className=="empty"){
                  document.getElementById("block3").innerHTML="if (some_condition) {<br>do_something}";
                  document.getElementById("block3").className="filled";
                }
              }
            }
            // The character is over block 3
            if (someblock == myBlock3) {
              gotBlock3 = true;
              //console.log("on block3");
              if (!gotBlock1 && !gotBlock2) {
                document.getElementById("block1").innerHTML="else {<br>do_some_other_thing}";
                document.getElementById("block1").className="filled";
              }
              if ((gotBlock1 && !gotBlock2) || (!gotBlock1 && gotBlock2)) {
                if (document.getElementById("block2").className=="empty"){
                  document.getElementById("block2").innerHTML="else {<br>do_some_other_thing}";
                  document.getElementById("block2").className="filled";
                }
              } 
              if (gotBlock1 && gotBlock2) {
                if (document.getElementById("block3").className=="empty"){
                  document.getElementById("block3").innerHTML="else {<br>do_some_other_thing}";
                  document.getElementById("block3").className="filled";
                }
              }
            }
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
    myGamePiece.getBlock(myBlock1);
    myGamePiece.getBlock(myBlock2);
    myGamePiece.getBlock(myBlock3);
    myBlock1.update();
    myBlock2.update();
    myBlock3.update();
    myGamePiece.update();
    if (gotBlock1 && gotBlock2 && gotBlock3) {
      //console.log(elseifstatement);
      if ((document.getElementById("block1").innerHTML == "if (some_condition) {<br>do_something}")
          && (document.getElementById("block2").innerHTML == "else if (some_other_condition) {<br>do_something_else}")
          && (document.getElementById("block3").innerHTML == "else {<br>do_some_other_thing}")){
        //console.log("youwon!!!!!!");
        youwon = true;
      }
      else {
        tryagain = true;
      }
    }
    if (youwon && !tryagain) {
      document.getElementById("block1").innerHTML = "YOU WON";
      document.getElementById("block2").innerHTML = "";
      document.getElementById("block3").innerHTML = "";
    }
    if (tryagain && !youwon) {
      document.getElementById("block1").innerHTML = "Not quite...refresh the page to try again.";
      document.getElementById("block2").innerHTML = "";
      document.getElementById("block3").innerHTML = "";
    }
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