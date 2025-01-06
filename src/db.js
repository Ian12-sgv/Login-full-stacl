import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://iqanillo2:z6FHWpMWuJnEH7lT@cluster1.ras4i.mongodb.net/Inicio"
    );
    console.log("Base de datos conectada");
  } catch (error) {
    console.error(error);
  }
};

/*creacion de la base de datos 
y prueba de concexion

*/
