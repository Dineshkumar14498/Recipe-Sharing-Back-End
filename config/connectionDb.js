const mongoose=require("mongoose")

//const mongoURI = "mongodb+srv://<username>:<password>@cluster0.mongodb.net/myDatabase?retryWrites=true&w=majority";


const connectDb = async () => {
    try {
      await mongoose.connect(process.env.CONNECTION_STRING, {
       // useNewUrlParser: true,
        //useUnifiedTopology: true
      });
      console.log("MongoDB connected successfully");
    } catch (error) {
      console.error("MongoDB connection error", error);
      process.exit(1);
    }
  };

module.exports=connectDb