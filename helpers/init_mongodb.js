const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_CONNECT, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,    
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
};

process.on('SIGINT',async ()=>{
  await mongoose.con
})

module.exports = connectDB;
