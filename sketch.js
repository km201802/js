var x = 5;
var y = 5;
var cw = 1000;
var ch = 500;

class dra{
    constructor(){
        this.x = 20;
        this.y = 10;
        this.xdir = 5;
        this.ydir = 8;
        this.radius = 20;
        this.col = this.radius/2;
        
        
        this.px1 = 20;
        this.py1 = 0;
        this.pw1 = 20;
        this.ph1 = 200;
        
        this.px2 = 950;
        this.py2 = 0;
        this.pw2 = 20;
        this.ph2 = 200;
    }
    mover(){
        this.x += this.xdir;
        this.y += this.ydir;
            
        if(this.x+this.col>cw){this.xdir = -this.xdir}
        if(this.y+this.col>ch){this.ydir = -this.ydir}
        if(this.x-this.col<=0){this.xdir = -this.xdir}
        if(this.y-this.col<=0){this.ydir = -this.ydir}
            
        ellipse(this.x,this.y,this.radius,this.radius);
    }
    players(){
        
        
        rect(this.px1, this.py1, this.pw1, this.ph1);
        rect(this.px2, this.py2, this.pw2, this.ph2);
    }
}

function setup() {
    createCanvas(cw,ch);  
}
    

    

    
    var obj = new dra();


function draw() {
    background( "#acffe3");
        
    obj.mover();
    obj.players();
    
    
    
}

