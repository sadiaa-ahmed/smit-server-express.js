console.log("This is express server");

import express from 'express';
const app = express()
// const port =  3000
app.get('/', (req, res) => {
    console.log("Hello" , new Date())
    res.send('Hello World!' + new Date())
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Example server listening on port ${PORT}`)
})

// hello world express.js ka server banaya hai r usko deploy kia hai cyclic k cloud per (deployment on cloud (cyclic.sh))
// humny just dekha hai k humny isko banaya kesy hai r deploy kesy kerna hai......