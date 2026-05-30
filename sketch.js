var whiteImg, xImg, oImg
var box1,box2,box3,box4,box5,box6,box7,box8,box9 
var gamestate ="oPlayer"
var box1State = "neverClicked"
var box2State = "neverClicked"
var box3State = "neverClicked"
var box4State = "neverClicked"
var box5State = "neverClicked"
var box6State = "neverClicked"
var box7State = "neverClicked"
var box8State = "neverClicked"
var box9State = "neverClicked"
var sound






function preload(){
    oImg=loadImage("o.png")
    xImg=loadImage("x.png")
    whiteImg=loadImage("white.png")
    sound=loadSound("point.mp3")
}


function setup(){
    createCanvas(470,470 );
    box1 = createSprite(75,75);
    box1.addImage(whiteImg);
    box1.scale = 1.48;

    box2=createSprite(235,75)
    box2.addImage(whiteImg)
    box2.scale=1.48;
    
    box3=createSprite(395,75)
    box3.addImage(whiteImg)
    box3.scale=1.48;

    box4=createSprite(75,235)
    box4.addImage(whiteImg)
    box4.scale=1.48;
    
    box5=createSprite(235,235)
    box5.addImage(whiteImg)
    box5.scale=1.48;

    box6=createSprite(395,235)
    box6.addImage(whiteImg)
    box6.scale=1.48;
   
    box7=createSprite(75,395)
    box7.addImage(whiteImg)
    box7.scale=1.48; 

    box8=createSprite(235,395) 
    box8.addImage(whiteImg)
    box8.scale=1.48;

    box9=createSprite(395,395)
    box9.addImage(whiteImg)
    box9.scale=1.48;
    
    
    
    
    
    
}



function draw(){
    background("black");

    drawSprites();
    console.log(gamestate)

    if(gamestate == "xPlayer"){
        
        if(mousePressedOver(box1) && box1State == "neverClicked"){
            sound.play()
            box1.addImage(xImg) 
            gamestate="oPlayer"
            box1State = "xClicked"
            checkWinner()
            
        }
        else if(mousePressedOver(box2)&& box2State =="neverClicked") {
            sound.play()
            box2.addImage(xImg)
            gamestate="oPlayer"
             box2State = "xClicked"
             checkWinner()
        }
        else if(mousePressedOver(box3)&& box3State =="neverClicked"){
            sound.play()
            box3.addImage(xImg)
            gamestate="oPlayer"
             box3State = "xClicked"
             checkWinner()
        }
        else if (mousePressedOver(box4)&& box4State =="neverClicked"){
            sound.play()
            box4.addImage(xImg)
            gamestate="oPlayer"
             box4State = "xClicked"
             checkWinner()
        }
        else if (mousePressedOver(box5)&& box5State =="neverClicked"){
            sound.play()
            box5.addImage(xImg)
            gamestate="oPlayer"
             box5State = "xClicked"
             checkWinner()
        }
        else if (mousePressedOver(box6)&& box6State =="neverClicked"){
            sound.play()
            box6.addImage(xImg)
            gamestate="oPlayer"
             box6State = "xClicked"
             checkWinner()
        }
        else if (mousePressedOver(box7)&& box7State =="neverClicked"){
            sound.play()
            box7.addImage(xImg)
            gamestate="oPlayer"
             box7State = "xClicked"
             checkWinner()
        }
        else if (mousePressedOver(box8)&& box8State =="neverClicked"){
            sound.play()
            box8.addImage(xImg)
            gamestate="oPlayer"
             box8State = "xClicked"
             checkWinner()
        }
        else if (mousePressedOver(box9)&& box9State =="neverClicked"){
            sound.play()
            box9.addImage(xImg)
            gamestate="oPlayer"
             box9State = "xClicked"
             checkWinner()
        }
    }

    if(gamestate == "oPlayer"){

        if(mousePressedOver(box1)&& box1State =="neverClicked"){
            sound.play() 
            box1.addImage(oImg)   
            gamestate="xPlayer"
            box1State = "oClicked"
            checkWinner()
        }
        else if (mousePressedOver(box2)&& box2State =="neverClicked"){
            sound.play()
            box2.addImage(oImg)
            gamestate="xPlayer"
            box2State = "oClicked"
            checkWinner()
        }
        else if (mousePressedOver(box3)&& box3State =="neverClicked"){
            sound.play()
            box3.addImage(oImg)
            gamestate="xPlayer"
            box3State = "oClicked"
            checkWinner()
        }
        else if (mousePressedOver(box4)&& box4State =="neverClicked"){
            sound.play()
            box4.addImage(oImg)
            gamestate="xPlayer"
            box4State = "oClicked"
            checkWinner()
        }
        else if (mousePressedOver(box5)&& box5State =="neverClicked"){
            sound.play()
            box5.addImage(oImg)
            gamestate="xPlayer"
            box5State = "oClicked"
            checkWinner()
        }
        else if (mousePressedOver(box6)&& box6State =="neverClicked"){
            sound.play()
            box6.addImage(oImg)
            gamestate="xPlayer"
            box6State = "oClicked"
            checkWinner()
        }
        else if (mousePressedOver(box7)&& box7State =="neverClicked"){
            sound.play()
            box7.addImage(oImg)
            gamestate="xPlayer"
            box7State = "oClicked"
            checkWinner()
        }
        else if (mousePressedOver(box8)&& box8State =="neverClicked"){
            sound.play()
            box8.addImage(oImg)
            gamestate="xPlayer"
            box8State = "oClicked"
            checkWinner()
        }
        else if (mousePressedOver(box9)&& box9State =="neverClicked"){
            sound.play()
            box9.addImage(oImg)
            gamestate="xPlayer"
            box9State = "oClicked"
            checkWinner()
        }
      
    }


}
function checkWinner(){
    if( (box1State == "xClicked" && box2State == "xClicked" && box3State == "xClicked") ||
        (box4State == "xClicked" && box5State == "xClicked" && box6State == "xClicked") ||
        (box7State == "xClicked" && box8State == "xClicked" && box9State == "xClicked") ||
        (box1State == "xClicked" && box4State == "xClicked" && box7State == "xClicked") ||
        (box2State == "xClicked" && box5State == "xClicked" && box8State == "xClicked") ||
        (box3State == "xClicked" && box6State == "xClicked" && box9State == "xClicked") ||
        (box1State == "xClicked" && box5State == "xClicked" && box9State == "xClicked") ||
        (box3State == "xClicked" && box5State == "xClicked" && box7State == "xClicked")
    )
    {
       
        box5.addImage(xImg) 
        box5.scale=4.8;
        box5.depth = 100;
    }
    if( (box1State == "oClicked" && box2State == "oClicked" && box3State == "oClicked") ||
        (box4State == "oClicked" && box5State == "oClicked" && box6State == "oClicked") ||
        (box7State == "oClicked" && box8State == "oClicked" && box9State == "oClicked") ||
        (box1State == "oClicked" && box4State == "oClicked" && box7State == "oClicked") ||
        (box2State == "oClicked" && box5State == "oClicked" && box8State == "oClicked") ||
        (box3State == "oClicked" && box6State == "oClicked" && box9State == "oClicked") ||
        (box1State == "oClicked" && box5State == "oClicked" && box9State == "oClicked") ||
        (box3State == "oClicked" && box5State == "oClicked" && box7State == "oClicked")
    )
    {
        box5.addImage(oImg)
        box5.scale=4.8;
        box5.depth=100;        
    }
    





}
