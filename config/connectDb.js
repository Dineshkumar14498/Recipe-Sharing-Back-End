const mongoose = require ("mongoose")

//const mongoURI = "mongodb+srv://<username>:<password>@cluster0.mongodb.net/myDatabase?retryWrites=true&w=majority";


const connectDb = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI, {
       
      });
      console.log('MongoDB connected');
    } catch (err) {
      console.error('MongoDB connection error:', err);
      process.exit(1);
    }
  };
  
  connectDb();
module.exports = connectDb