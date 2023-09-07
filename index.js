import express from 'express';
import bodyParser from 'body-parser';
import movieRoutes from './routes/movies.js'

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/movies', movieRoutes);
app.use('/movies/name',movieRoutes)

app.get('/', (req,res)=>{
    console.log('[TEST]!');
    res.send('Hello')

});

app.listen(PORT, ()=> console.log(`server running on port : http://localhost:${PORT}`))
