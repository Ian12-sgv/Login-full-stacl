import app from "./app.js";
import { connectDB } from "./db.js";

connectDB();

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

/*para tener un codigo mas limpio se importo app y la 
conexion a la base de datos
*/
