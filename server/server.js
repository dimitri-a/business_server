
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Shop from '../models/Shop';

const app = express();

const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/Shops');

const connection = mongoose.connection;

router.route('/Shops/add').post((req, res) => {
    let shop = new Shop(req.body);
    shop.save()
        .then(shop => {
            res.status(200).json({'Shop': 'Added successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create new record');
        });
});


router.route('/shops').get((req, res) => {
    Shop.find((err, shops) => {
        if (err)
            console.log(err);
        else
            res.json(shops);
    });
});


connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});

app.use('/', router);

app.listen(4000, () => console.log('Express server running on port 4000'));