import express from 'express';

const app = express();

app.get('/',(req,res)=> res.send('Hello worls'));

app.listen(4000,()=>console.log('express server running on 4000'));