function preload(){
trexI=loadAnimation("trex1.png","trex3.png","trex4.png")
groundI=loadImage("ground.png")
cloudI=loadimage()
}




function setup() {
              createCanvas(600,200);
              trexi.frameDelay=2
              trex=createSprite(50, 165)
              trex.addAnimation("trexrun",trexi)
              trex.scale=0.5
              ground1=createSprite(300, 185, 600, 15)
              ground1.addImage(groundI)
              ground2=createSprite(300, 197, 600, 15)
              ground2.visible=false

}

function draw() {
              background("lightblue");
              trex.collide(ground2)
              ground1.velocityX=-4

              if (ground1.x<0){
                ground1.x=600
                }

              if (keyDown("space")&&trex.isTouching(ground1)){
              trex.velocityY=-15
              }
trex.velocityY=trex.velocityY+0.8
  drawSprites()



  
}




