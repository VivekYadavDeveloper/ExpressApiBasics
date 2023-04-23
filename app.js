const express = require('express');
const app = express();




app.use(require('./router/router'));

// ! *** For Parsing Data From Json
app.use(express.json());


// ** Status Code
// 200 - OK
// 201 - POSTCreate
// 400 - BadReq
// 401 - Unauth
// 500 - ServerError


//? **************** Dynamic Routing *******************/
// ** Dynamic Routing


app.get('/posts/:id', (_req, res) => {

    var id = _req.headers['id']
    // var ide = _req.params.ide;
    var token = _req.headers['token']
    res.send({ 'token': token, 'id': id });
})

//? **************** Dynamic Routing *******************/






// ** Create a Route For Show Data

app.get('/', (_req, res) => { res.send('Hello Coders From Home !'); });




//? **************** Query Data *******************/

// ** How to Get Data in Query Form
app.get('/query', (_req, res) => {

    // ? ** Normal Way
    // var username = _req.query.username;
    // var password = _req.query.password;

    //? ** I Javascript Formate (Dstructured)
    const { username, password } = _req.query;

    res.send({ 'name': username, 'password': password });
});
//? **************** Query Data *******************/







//? **************** JSon Formate Data *******************/
// ** JSON Formate
app.post('/profile', (_req, res) => { res.status(201).send({ 'data': 'Tanu' }); });

//? **************** Json Formate Data *******************/



//***? Get Json Data */
// ** Get Json Data From Body

app.post('/login', (_req, res) => {

    console.log(_req.body);
    res.send({ "data": "Working" });
})

//? **************** LOCAL HOST *******************/
// ** Create a PORT Method With With Any Number.
const PORT = process.env.PORT || 3000;
//? **************** LOCAL HOST *******************/





//? ** Create a Listen To Show The Logs
app.listen(PORT, () => { console.log("Server Running!") });