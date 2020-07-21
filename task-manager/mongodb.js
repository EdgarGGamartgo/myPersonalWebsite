const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id)
// console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
        if(error) {
           return console.log('Unable to connect to database!')
        }

        const db = client.db(databaseName)

        // db.collection('users').deleteOne({
        //     _id: new ObjectID('5f13e2a4333df9df3490c0c7')
        // }).then((r) => {
        //     console.log(r)
        // }).catch((e) => {
        //     console.log(e)
        // })

        // 5f13dfe369b604dda5521500

        // db.collection('users').deleteMany({
        //     age: 25
        // }).then((result) => {
        //     console.log(result)
        // }).catch((error) => {
        //     console.log(error)
        // })

        // db.collection('users').updateOne({
        //     _id: new ObjectID('5f13dfe369b604dda5521500')
        // }, {
        //     // $set: {
        //     //     name: 'Chelsey'
        //     // }
        //     $inc: {
        //         age: 1
        //     }
        // }).then((result) => {
        //     console.log(result)
        // }).catch((error) => {
        //     console.log(error)
        // })

        // db.collection('users').updateMany({
        //     //_id: new ObjectID('5f13dfe369b604dda5521500')
        //     name: 'TestName'
        // }, {
        //      $set: {
        //          name: 'Dieu'
        //      }
        //     // $inc: {
        //     //     age: 1
        //     // }
        // }).then((result) => {
        //     console.log(result)
        // }).catch((error) => {
        //     console.log(error)
        // })

        // db.collection('users').findOne({ name: 'Edgar2' }, (error, user) => {
        //     if(error) {
        //         return console.log('Unable to find user!')
        //     } 

        //     console.log(user)
        // })

        // db.collection('users').find({ age: 24 }).toArray((error, users) => {
        //     console.log(users)
        // })

          db.collection('tasks').insertOne({
              description: 'Learn Mongoose',
              completed: false
          }, (error, result) => {
             if (error) {
               return console.log('Unable to insert user')
             }
            
             console.log(result.ops)

          })
               
        // db.collection('users').insertMany([{
            //     description: 'First description',
            //     completed: true
            // },{
            //     description: 'Second description',
            //     completed: true
            // },{
            //     description: 'Third description',
            //     completed: false
            // }], (error, result) => {
            //     if(error) {
            //         return console.log('Unable to insert three documents!')
            //     }db.collection('users').insertMany([{
        //     description: 'First description',
        //     completed: true
        // },{updatePromise
        // },{
        //     description: 'Third description',
        //     completed: false
        // }], (error, result) => {
        //     if(error) {
        //         return console.log('Unable to insert three documents!')
        //     }

        //     console.log(result.ops)
        // })
        // },{
        //     name: 'Andrea',
        //     age: 29
        // }], (error, result) => {
        //         if (error) {
        //             return console.log('Unable to insert documents!')
        //         }Jen
        // })

        // db.collection('users').insertMany([{
        //     description: 'First description',
        //     completed: true
        // },{
        //     description: 'Second description',
        //     completed: true
        // },{
        //     description: 'Third description',
        //     completed: false
        // }], (error, result) => {
        //     if(error) {
        //         return console.log('Unable to insert three documents!')
        //     }

        //     console.log(result.ops)
        // })

        


})