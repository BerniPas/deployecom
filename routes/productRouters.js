import { body } from 'express-validator';
import express from 'express';
const router = express.Router();

//import indexControllers from '../controllers/indexControllers.js';

import { 
    getProducts,
    createProduct,
    deleteProduct,
} from '../controllers/productConterollers.js';

// esta ruta responde a /product   /product/delete/

router.get('/', getProducts); 


router.get('/registro', (req, res) => {
    res.render('formProductos');
});

router.get('/card/:id', getProducts);

router.post('/registro', 
    [
        body('nombreProducto')
            .isLength({ min: 3 })
            .trim()
            .withMessage('El nombre del producto es obligatorio'),
        body('precioProducto')
            .isNumeric()
            .trim()
            .withMessage('El precio del producto debe ser un número'),
        body('descripcionProducto').isLength({ min: 3 }).trim().withMessage('La descripción del producto es obligatoria'),
        body('stockProducto').isNumeric().trim().withMessage('El stock del producto debe ser un número'),
        body('imagenProducto').isURL().trim().withMessage('La imagen del producto debe ser una URL')
    ], 
createProduct
);

router.post('/delete/:_id', deleteProduct);



export default router;