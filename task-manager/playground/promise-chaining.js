require('../src/db/mongoose')
const User = require('../src/models/user')


User.findByIdAndUpdate('5f14bf4e4bf7b85ce54bed69', { age: 1 }).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 1})
}).then((result) => {
   console.log(result)
}).catch((e) => {
    console.log(e)
})