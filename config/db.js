import mysql from "mysql";

export const db = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.DATABASE
});


db.connect(error =>{
  if(error){
    console.error("Database Connection failed: ", error.message)
    process.exit(1)
  }
  console.log("Database connected successfully!")
})