const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://manu:mimanuel1@cluster0.gdshf.mongodb.net/ejemplo?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err));