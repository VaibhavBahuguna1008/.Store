import mongoose  from 'mongoose'
import colors from 'colors'

const connectdb = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log('Connected to MongoDB '.bgMagenta.white);
        
    }
    catch (err){
        console.log(`Mongodb Error : ${err}`.bgRed);
        
    }
}

export default connectdb;