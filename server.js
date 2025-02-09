const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Set up MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',  // replace with your MySQL username
  password: '12345',  // replace with your MySQL password
  database: 'checkout_db'  // replace with your database name
});

// Connect to MySQL
db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err.stack);
    return;
  }
  console.log('Connected to MySQL');
});

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));  // Serve static files (HTML, CSS, JS)

// POST endpoint to handle order submission
app.post('/submit-order', (req, res) => {
  const { name, email, address, total } = req.body;

  const query = 'INSERT INTO orders (name, email, address, total) VALUES (?, ?, ?, ?)';
  db.query(query, [name, email, address, total], (err, result) => {
    if (err) {
      console.error('Error inserting order:', err.stack);
      return res.status(500).json({ error: 'Failed to save order' });
    }
    console.log('Order stored in database:', result);
    res.status(200).json({ message: 'Order successfully stored' });
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
