class Plinko{
constructor(x,y,r){
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2}
		this.x=x;
		this.y=y;
		this.body=Bodies.circle(this.x, this.y,10, options)
		World.add(world, this.body);
}
display(){
	var pos=this.body.position;		

	push()
	translate(pos.x, pos.y);
	rectMode(CENTER)
	strokeWeight(3);
	fill("white");
	ellipse(0,0,20, this.r);
	pop()
			
	}

}