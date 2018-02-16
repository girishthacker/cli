let promise=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("It's Good To Go");
	},1000);
	
	
});
let promise2=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		reject('Promise 2');
	},1500)
});
Promise.all([promise,promise2])
.then((data)=>{
	console.log(data);
})
.catch((err)=>{
	console.log(err);
})