const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})



// const Task = mongoose.model('Task', {
//     description: {
//         type: String
//     },
//     completed: {
//         type: Boolean
//     }
// })

// const task = new Task({
//     description: 'Learn the Mongoose library',
//     completed: false
// })
// const me = new User({

//     name: "  Paola   ",
//     email: 'AA@AA.CO',
//     password: '  passwo@MARTINEZPASS  '

// })

// me.save().then((r) => {
//     console.log(r)
//     console.log("External Object", me)

// }).catch((e) => {
//     console.log(e)
// })
//     email: 'AA@AA.CO',
//     password: '  passwo@MARTINEZPASS  '

// })

// me.save().then((r) => {
//     console.log(r)
//     console.log("External Object", me)

// }).catch((e) => {
//     console.log(e)
// })
