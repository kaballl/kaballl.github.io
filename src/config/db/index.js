const mongoose=require('mongoose')

async function connect(){
    try{
        await mongoose.connect('mongodb://localhost:/PTUDW',{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log('success')
    }catch(error){
        console.log('fail')
    }

}
module.exports={connect}
