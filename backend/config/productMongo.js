import mongoose from "mongoose"


const mongoConnection = () => {
	mongoose.connect("mongodb://127.0.0.1:27017/producto")
		.then(() => {
			console.log("Conectado a la BD");
		})
		.catch((e)=>{
			console.log(e);
		})
}

export default mongoConnection;