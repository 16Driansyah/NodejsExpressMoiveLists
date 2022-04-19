const express = require('express');
const bodyParser = require('body-parser');
const koneksi = require('./config/database');
const app = express();
const PORT = process.env.PORT || 5000;
// set body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//create data/insert data
app.post('/api/movies', (req, res) =>{
    //buuat variabel penampung data querysql
    const data = { ...req,body };
    const querySql = 'INSERT INTO movies SET';

    // jalankan query
    koneksi.query(querySql, data, (err, rows, filed) => {
        //error handing
        if (err) {
            return res.status(500).json({message: 'Gagal insert data!, error: err'});
        }

        //jika request bverhasil
        res.status(201).json({ success: true, mesage: 'Berhasil insert data!'});
    });
});
//buat server nya
app.listen(PORT, () => console.log('Server running at port: ${PORT}'));