class Vetor{

	x;
    y;
    
	constructor(){
     this.x = 0;
     this.y = 0;
	}
 /*
	constructor(x_, y_){
     this.x = x_;
     this.y = y_;
	}
	*/

   /*soma de vetores*/
	
	addPos(x_,y_){//muda a posicao do objeto
    this.x = x_;
    this.y = y_;
	
	}

	addValor(val){//valor unico para todos
    this.x += val;
    this.y += val;
	
	}

    add(x_,y_){//move o objeto
    this.x += x_;
    this.y += y_;
	
	}

	/*SUBTRACAO DE VETORES*/

	sub(valor){
		this.x-=valor;
		this.y-=valor;
	}
    sub(x_,y_){
    this.x -= x_;
    this.y -= y_;
	
	}
	mult(valor){
		this.x*=valor;
		this.y*=valor;
	}


	div(valor){
		if(valor!=0){
		   this.x/=valor;
		   this.y/=valor;
		}
	}

	 mag(){
	 	let x = (this.x*this.x) + (this.y*this.y);
      return Math.floor(Math.sqrt(x));
	}
	 normalizar(){
		let m = this.mag();
		if(m!=0){
			this.div(m);
		}
	}
}