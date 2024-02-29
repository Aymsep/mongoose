const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const User = require('./Modals/author.Schema');
const booksSchema = require('./Modals/books.Schema');

app.use(express.json())
app.use(express.urlencoded({ extended:true}))

mongoose.connect('mongodb+srv://aymsep2learn:4EGTWOkTPgLedFGi@cluster0.iqud3sq.mongodb.net/')
.then(()=>{
    console.log('connected to database');
}).catch(err=>{
    console.log('error connecting to database')
})




app.post('/adduser', async(req, res) => {
    const newUser = new User(req.body)
    const result = await newUser.save()
    res.json({
        data: result
    })
});


app.post('/addbook', async(req, res) => {
    console.log(req.body)
    const newBook = new booksSchema(req.body)
    const result = await newBook.save()
    res.json({
        data: result
    })
});


app.get('/getbook/:id', async(req, res) =>{
    if(mongoose.Types.ObjectId.isValid(req.params.id)){
        const book = await booksSchema.findById(req.params.id)
        res.json({
            data: book
        })
    }
    res.send('book not found')
     
})


app.put('/updatebook/:id', async(req, res) =>{
    if(mongoose.Types.ObjectId.isValid(req.params.id)){
        const book = await booksSchema.findByIdAndUpdate(req.params.id, req.body,{new:true})
        console.log(book)
        return res.json({
            data: book
        })
}
    return res.send('book not updated')
}
)





app.delete('/deletebook/:id', async(req, res) =>{
    if(mongoose.Types.ObjectId.isValid(req.params.id)){
        const book = await booksSchema.deleteOne({_id:req.params.id})
        return res.json({
            data: book
        })
    }
    return res.send('book not deleted')
}
)


app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
