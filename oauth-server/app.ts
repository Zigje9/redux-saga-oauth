import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 5000;

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors(corsOptions));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
