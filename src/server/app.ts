import express from 'express';
import { bind } from './routes';

const app = express();
const port = 3000;

app.use(express.json());

bind(app);

app.listen(port, () => console.log(`Listening on port: ${port}...`));
