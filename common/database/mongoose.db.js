const mongoose = require('mongoose');

const options = {
    autoIndex: false,
    reconnectTries: 30,
    reconnectInterval: 500,
    poolSize: 10,
    bufferMaxEntries: 0,
    useNewUrlParser: true,
    useUnifiedTopology: true

};
//details of my local db
//mongodb://localhost:27017/RoadMaster

const connectWithRetry = () => {
    //console.log('MongoDB connection with retry')
    mongoose.connect("mongodb://sekinat:sekinat1@ds237475.mlab.com:37475/roadmaster-be", options).then(() => {
       // console.log('MongoDB is connected')
    }).catch(err=>{
       // console.log('MongoDB connection unsuccessful, retry after 5 seconds. ', ++count);
        setTimeout(connectWithRetry, 5000)
    })
};
connectWithRetry();
exports.mongoose = mongoose;
