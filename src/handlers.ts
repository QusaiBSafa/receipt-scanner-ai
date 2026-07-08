import { Request, Response } from 'express';
import Tesseract from 'tesseract.js';

export const processReceipt = async (req: Request, res: Response) => {
  try {
    const { buffer } = req.file!;
    const { data: { text } } = await Tesseract.recognize(buffer, 'eng');

    // Simple regex patterns to extract information
    const merchant = text.match(/Merchant: (.+)/)?.[1];
    const date = text.match(/Date: (.+)/)?.[1];
    const tax = text.match(/Tax: (.+)/)?.[1];
    const total = text.match(/Total: (.+)/)?.[1];

    res.json({ merchant, date, tax, total });
  } catch (error) {
    res.status(500).json({ error: 'Failed to process receipt' });
  }
};
