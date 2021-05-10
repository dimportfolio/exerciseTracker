const mongoose = require('mongoose');

//Allows us to use Promises to handle asynchronous code
mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://admin:admin@cluster0.13kmk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', 
{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: false
})
    //code that is run when the database is connected
    .then(() => console.log("Database Connected"))
    .catch((error) => console.log(error));

module.exports = mongoose;




