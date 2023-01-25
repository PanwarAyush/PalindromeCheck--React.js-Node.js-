const express = require('express')
const cors=require('cors')
const app = express()
app.use(cors())
app.use(express.json())
app.post('/checkPalindrome',(req,res)=>{
     const w=req.body.word;
     let len=w.length,isPalin='YES';
     for(let i=0;i<len/2;i++){
       if(w[i]!=w[len-i-1]){
        isPalin='NO';
        break;
       }
     }
    res.send(JSON.stringify({'isPalindrome':isPalin}));
})
app.listen(8080,()=>{
  console.log('Server started at http://localhost:8080')
})

