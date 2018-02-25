import rp  from'request-promise';

class indexModels{
	constructor(ctx){
		this.ctx=ctx;
	}
	updateNum(){
		const options={
			uri:'http://localhost:8050/server.php',
			method:'GET',
		}
		return new Promise ((resolve,reject)=>{
			rp(options).then(function(result){
				const info = JSON.parse(result);
				if(info){
					resolve({data:info})
				}else{
					reject({});
				}
			})
			
		})
	}
}
export default  indexModels;