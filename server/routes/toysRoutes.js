import express from 'express';
import upload from '../middleware/upload.js';
import { getAllToys, addToy, updateToy } from '../controllers/toysController.js';

const router = express.Router();

router.get('/get-all-toys', getAllToys);
router.post('/add', upload.single('image'), addToy);
router.put('/:id', upload.single('image'), updateToy);

export default router;
