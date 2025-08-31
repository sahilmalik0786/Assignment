import './src/env.ts'
import app from './src/app.ts'




const PORT:Number = 3000
app.listen(PORT , ()=>{
    console.log('hello server is runnig on port ')
})