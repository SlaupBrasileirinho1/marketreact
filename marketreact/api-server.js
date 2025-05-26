import express from 'express';
import pkg from 'pg';
const { Pool } = pkg;
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

// Neon PostgreSQL connection string
const connectionString = 'postgresql://neondb_owner:npg_OdgXJyU34brS@ep-rapid-voice-a5gdj577-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require';

// Create a new pool instance
const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
});

app.use(cors());
app.use(express.json());

// Endpoint to create a product
app.post('/api/products', async (req, res) => {
  const { name, description, price, category, image_url } = req.body;

  if (!name || !price) {
    return res.status(400).json({ error: 'Name and price are required fields' });
  }

  try {
    const query = `
      INSERT INTO products (name, description, price, category, image_url)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;
    const values = [name, description || null, price, category || null, image_url || null];

    const result = await pool.query(query, values);

    res.status(201).json({ product: result.rows[0] });
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Endpoint to get all products
app.get('/api/products', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM products ORDER BY id DESC');
    res.json({ products: result.rows });
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Endpoint to delete a product by id
app.delete('/api/products/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const result = await pool.query('DELETE FROM products WHERE id = $1 RETURNING *', [id]);
    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json({ message: 'Product deleted', product: result.rows[0] });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Endpoint to update a product by id
app.put('/api/products/:id', async (req, res) => {
  const id = req.params.id;
  const { name, description, price, category, image_url } = req.body;

  if (!name || !price) {
    return res.status(400).json({ error: 'Name and price are required fields' });
  }

  try {
    const query = `
      UPDATE products
      SET name = $1, description = $2, price = $3, category = $4, image_url = $5
      WHERE id = $6
      RETURNING *;
    `;
    const values = [name, description || null, price, category || null, image_url || null, id];

    const result = await pool.query(query, values);

    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json({ product: result.rows[0] });
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}`);
});
