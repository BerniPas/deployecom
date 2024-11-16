
import express from 'express';
const router = express.Router();

//import indexControllers from '../controllers/indexControllers.js';

import { 
    createProduct
} from '../controllers/productConterollers.js';

// esta ruta responde a /product

router.get('/', (req, res) => {
    res.render('productos',
        {
            mensaje: "Listado de productos",
        }
    );
}); 


router.get('/registro', (req, res) => {
    res.render('formProductos');
});

router.post('/registro', createProduct);


export default router;