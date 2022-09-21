import app from "./app.js";
import { connectDB } from "./database.js";
import { PORT } from "./config.js";

async function main() {
  await connectDB();
  app.listen(app.get("port"));

  console.log(`Server on port: ${PORT}, Running ...`, app.get("port")); 
  console.log("Environment:", process.env.NODE_ENV);
}

main();