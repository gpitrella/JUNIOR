import app from "./app.js";
import { connectDB } from "./database.js";
import { createAdminUser, createTech } from "./libs/createUser.js";
import { PORT } from "./config.js";

async function main() {
  await connectDB();
  await createAdminUser();
  await createTech();
  app.listen(app.get("port"));

  console.log(`Server on port: ${PORT}, Running ...`, app.get("port")); 
  console.log("Environment:", process.env.NODE_ENV);
}

main();