class Box{

 //Property
 constructor(x,y){
     this.x=x;
     this.y=y;
     this.w=50;
     this.h=50;
 }


 //Functions
 show(){
    rect(this.x,this.y,this.w,this.h)
 }

 setSpeed(s){
     this.x+=s;
 }


}