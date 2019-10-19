const express = require ("express")
const bodyParser =require ("body-parser")
const {MongoClient , ObjectID}= require ('mongodb')
const assert=require ("assert")

const app= express ()

app.use (bodyParser.json())

const Mongo_url="mongodb://localhost:27017"
const DataBase='API'

MongoClient.connect(Mongo_url, { useNewUrlParser: true },(err,client)=> {
    assert.equal(err,null,'Connection Failed')

    const db=client.db(DataBase)


app.post('/add_Contact',(req,res)=>{
    var newContact=req.body 
    db.collection('ContactList').insertOne(newContact,(err,data)=>{
        if(err) res.send('Can not add Contact')
        else res.send(data)
    })
})

app.get('/Contacts',(req,res)=>{
    db.collection('ContactList').find().toArray((err,data)=>{
        if(err) res.send ("Can not Get Contacts")
        else res.send(data)
    })

})

app.get('/Contacts/:id',(req,res)=>{
    var id=ObjectID(req.params.id)
    db.collection('ContactList').findOne({_id:id},(err,data)=>{
        if(err) res.send ("Can not Get Contact")
        else res.send(data)   
    })
})

app.put('/Edit/:id',(req,res)=>{
    var id=ObjectID(req.params.id)
    var update=req.body
    db.collection('ContactList').findOneAndUpdate({_id:id},{$set:{...update}},(err,data)=>{
        if(err) res.send ("Can not update Contact")
        else res.send(data)   
    })

})

app.delete('/Contacts/:id',(req,res)=> {
    var id=ObjectID(req.params.id)
    db.collection('ContactList').findOneAndDelete({_id:id},(err,data)=> {
        if(err) res.send ("Can not update Contact")
        else res.send(data)   
    })
})

})


app.listen(3007, err => {
    if (err) console.log ("Server is not running")
    else console.log("Server is running ")

})