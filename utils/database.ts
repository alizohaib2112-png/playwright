import { Pool } from 'pg';

const pool = new Pool({
  connectionString: 'postgresql://postgres:mypassword@localhost:5432/mydatabase',
});

export async function createUser(name: string, email: string) {
  await pool.query(
    'INSERT INTO users (name, email) VALUES ($1, $2)',
    [name, email]
  );
}

export async function getUser(email: string) {
  const result = await pool.query(
    'SELECT * FROM users WHERE email = $1',
    [email]
  );
  return result.rows[0];
}

export async function updateUser(email: string, newName: string) {
  await pool.query(
    'UPDATE users SET name = $1 WHERE email = $2',
    [newName, email]
  );
}

export async function deleteUser(email: string) {
  await pool.query(
    'DELETE FROM users WHERE email = $1',
    [email]
  );

}

export  function randomEmail(): string {
  return `test_${Date.now()}_${Math.floor(Math.random() * 1000)}@example.com`;
}

export  function randomName(): string {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  const length = Math.floor(Math.random() * 5) + 6;
  let name = '';

  for (let i = 0; i < length; i++) {
    name += letters.charAt(Math.floor(Math.random() * letters.length));
  }

  return name.charAt(0).toUpperCase() + name.slice(1);
}

