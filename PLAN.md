# Infrastructure Overview
This application consists of a simple Express server that handles receipt uploads and processes them using OCR.

## Data Models
- Receipt: Represents the uploaded receipt with fields for merchant, date, tax, and total.

## API Design
- `POST /api/receipt`: Endpoint to upload a receipt image.

## Key Decisions
- Using Tesseract.js for OCR processing.
- Storing extracted data in memory (for simplicity).
