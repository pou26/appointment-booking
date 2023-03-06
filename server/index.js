const express = require("express")
const cors=require("cors");

const route = require('./route');
const { default: mongoose } = require('mongoose');
const app = express();
app.use(cors({origin:"https://thunderous-syrniki-4baee8.netlify.app/"}))

app.use(express.json());
mongoose.set('strictQuery', true)

mongoose.connect("mongodb+srv://poushali26:0U8on2StHP5FNKo2@cluster0.jwwwcc8.mongodb.net/Altius-DB?retryWrites=true&w=majority", {
    useNewUrlParser: true
})

.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);


app.listen(process.env.PORT || 3001, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3001))
});