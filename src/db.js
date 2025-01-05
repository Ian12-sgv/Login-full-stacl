import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost/Inicio");
    console.log("Base de datos conectada");
  } catch (error) {
    console.error(error);
  }
};

/*creacion de la base de datos 
y prueba de concexion

*/
