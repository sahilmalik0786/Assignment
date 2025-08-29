import './src/env.ts'
import app from './src/app.ts'
console.log(process.env.MONGODB_URI)



const PORT:Number = 3000
app.listen(PORT , ()=>{
    console.log('hello server is runnig on port ')
})