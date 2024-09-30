const mongoose = require ("mongoose")



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