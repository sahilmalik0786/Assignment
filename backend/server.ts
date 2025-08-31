import './src/env.js'
import app from './src/app.js'




const PORT:Number = 3000
app.listen(PORT , ()=>{
    console.log('hello server is runnig on port ')
})