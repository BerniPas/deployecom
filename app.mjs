import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';
import hbs from 'hbs';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
dotenv.config();

// importamos las rutas
import userRouter from './routes/usersRouters.js';
import apiRouter from './routes/userApiRouters.js';

const app = express();

// si usamos __dirname, __filename, no funcionará en módulos ES6
// import { fileURLToPath } from 'url';

// Obtener la URL del módulo actual
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cookieParser())
app.use(morgan('dev'));

app.set('view engine', 'hbs');
app.set('views', 'views');
hbs.registerPartials(path.join('views/partials'));
// hbs.registerPartials(path.join(__dirname, 'views/partials'));

// rutas para la api
app.use('/api/user', apiRouter);

// rutas para el front
app.use('/', userRouter);

app.get('/*', (req, res) => {
    res.render('error');
});

export default app;
