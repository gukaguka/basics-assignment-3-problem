const app = Vue.createApp({

data(){
return {

result: 0,

};

},

methods: {
	addNum(input){
		this.result += input;
	},

	addOne(){
		this.result++;
	}


}, 

computed: {
		validation(){
		if(this.result === 37){
			return "bingo " + this.result;
		}
		else if(this.result > 37){
			return "too much! " + this.result; 
		}
		else{
			return "Not there yet " + this.result;
		}
	},

}

});


app.mount("#assignment");