var limit=50, // Max number of starts
body=document.body;
loop={
	//initilizeing
	start:function(){
		for (var i=0; i <= limit; i++) {
			var star=this.newStar();
			star.style.top=this.rand(100)+"%";
			star.style.left=this.rand(100)+"%";
			star.style.webkitAnimationDelay=this.rand(5)+"s";
			star.style.animationDelay=this.rand(5)+"s";
			body.appendChild(star);
		};
	},
	//to get random number
	rand:function(mult){
		return Math.random()*mult;
	},
	//createing html dom for star
	newStar:function(){
		var d = document.createElement('div');
		d.innerHTML = '<div class="star"><img src="gfx/star.svg" /></div>';
 		return d.firstChild;
	},
};
loop.start();
