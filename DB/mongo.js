import mongoose from "mongoose"


var uri = "";
const connection = () =>{
    mongoose.set('strictQuery', false);
    mongoose.connect(uri).then(()=>{
         console.log("db connected")
    }).catch(error =>{
         console.log("ERROR MESSAGE :-  \n"+error)
    })

}


export default connection;