let mongoose = require('mongoose');

var options = {
    connectTimeoutMS: 5000,
    useNewUrlParser: true,
    useUnifiedTopology: true
}

const mongoLink = 'mongodb+srv://minioctopuses:19pL8gLxZtir4dwP@mini-octopuses.mhhws.mongodb.net/Mini_Octopus_DB?retryWrites=true&w=majority'

mongoose.connect(mongoLink,
    options,
    function (err) {
        if (err) {
            console.log(`error, failed to connect to the database because --> ${err}`);
        } else {
            console.log('Connection successful')
        }
    }
);