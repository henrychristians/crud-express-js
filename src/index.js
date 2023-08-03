require('dotenv').config();
const express = require('express');
const userRoute = require('./routes/users');
const middlewareLogReq = require('./middleware/logs');
const user = require('./middleware/multer')
const app = express();
const PORT = process.env.PORT || 4000;

// Middleware logging on console
app.use(middlewareLogReq);

// Middleware JSON
app.use(express.json());

// Middleware static file
app.use('/assets', express.static('public/img'));

app.use("/users", userRoute);
app.post("/upload", user.single('photo'),(req, res) => {
    res.json({
        message: `Upload success`
    })
})

// Middleware menghandle error
app.use((err, req, res, next) => {
    res.json({
        message: err.message
    })
})

app.listen(PORT, () => {
    console.log(`Server runing pada port ${PORT}`);
});