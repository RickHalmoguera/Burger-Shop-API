require('ts-node/register')
import app from './app'


const PORT = 3000
app.get('/',(req,res)=>{
    res.send("Hello")
})


app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})