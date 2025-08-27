import mysql from "mysql2";

export const db = mysql.createConnection({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYSQLDATABASE,
  port: process.env.MYSQLPORT
});

db.connect((error) => {
  if (error) {
    console.error("Database Connection failed: ", error.message);
    process.exit(1);
  }
  console.log("Database connected successfully!");
});
