import mysql from "mysql2";

export const db = mysql.createConnection({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYSQLDATABASE,
  port: process.env.MYSQLPORT
});

db.connect((err) => {
  if (err) {
    console.error("Database Connection failed:", err.message);
    process.exit(1);
  }
  console.log("Database connected successfully!");

  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS schools (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      address VARCHAR(255) NOT NULL,
      latitude FLOAT NOT NULL,
      longitude FLOAT NOT NULL
    );
  `;

  db.query(createTableQuery, (err) => {
    if (err) {
      console.error("Table creation failed:", err.message);
    } else {
      console.log("Schools table is ready!");
    }
  });
});
