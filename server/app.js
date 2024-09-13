import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { PORT } from './config.js';
import indexRoutes from './routes/index.routes.js'
import usuariosRoutes from './routes/usuarios.routes.js'
import clientesRoutes from './routes/clientes.routes.js'
import loginRoutes from './routes/login.routes.js'

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
}));

app.use(express.json());

app.use(morgan('dev'));

app.use(indexRoutes);
app.use(usuariosRoutes);
app.use(clientesRoutes);
app.use(loginRoutes);

export default app;