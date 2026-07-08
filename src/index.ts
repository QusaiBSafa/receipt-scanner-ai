import express from 'express';
import multer from 'multer';
import { processReceipt } from './handlers';

const app = express();
const PORT = process.env.PORT || 3000;
const upload = multer({ storage: multer.memoryStorage() });

app.post('/api/receipt', upload.single('receipt'), processReceipt);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
