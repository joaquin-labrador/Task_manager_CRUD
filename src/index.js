import app from "./app.js";
import "./database/database.js";

app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
