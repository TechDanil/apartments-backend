import express from 'express';

import getApartments from '../controllers/apartments.controller';

const router = express.Router();

router.get('/apartments', getApartments);

export default router;
