// 
const app=require('./src/app');

app.listen(3000,()=>{
    console.log('server is running on port 3000');
});

const notes=[]
 app.post('/notes',(req,res)=>{
    console.log(req.body);
    notes.push(req.body);
    res.status(201).json({ message: 'Note created', note: req.body });
   
 })
app.get('/notes',(req,res)=>{
    res.status(200).json({ notes: notes });
})

app.delete('/notes/:index',(req,res)=>{
    const index = req.params.index;
    delete notes[index];

    res.status(200).json({ message: 'Note deleted' });
   
});
 app.patch('/notes/:index',(req,res)=>{
    const index = req.params.index;
    const descruption = req.body.description;
    notes[index].description = descruption;

    res.status(200).json({ message: 'Note updated', note: notes[index] });
 })
 //bTZgWDM97ff9K7dW
 //mongodb+srv://yt:bTZgWDM97ff9K7dW@cluster0.y07pnf8.mongodb.net/
