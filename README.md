# Receipt Scanner

## Description
A standalone application for uploading receipts and extracting key information such as Merchant, Date, Tax, and Total using OCR and LLM.

## What's Built
- Receipt upload functionality
- OCR processing to extract information from receipts
- Simple API to interact with the application

## How to Run
1. Clone the repository: `git clone https://github.com/yourusername/receipt-scanner-ai.git`
2. Navigate to the project directory: `cd receipt-scanner-ai`
3. Install dependencies: `npm install`
4. Start the application: `npm start`
5. Access the API at `http://localhost:3000/api/receipt`

## API Documentation
### POST /api/receipt
- **Description**: Upload a receipt image to extract information.
- **Request Body**: Form-data with a file field named `receipt`
- **Response**: JSON object containing `merchant`, `date`, `tax`, and `total`

## Environment Variables
- `PORT` - (optional) Port to run the application (default: 3000)
