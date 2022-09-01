import path from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";
import express from "express";
import { create } from "express-handlebars";
import tasksRoutes from "./routes/tasks.routes.js";
import aboutMeRoutes from "./routes/aboutme.routes.js";
import errorHandler from "./middleware/404.js";

const app = express();
app.set("port", 3001|| process.env.PORT);

// settings path -> directorio de archivos: __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// settings hbs engine
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  create({
    layoutsDir: path.join(app.get("views"), "layouts"),
    defaulLayout: "main",
    extname: ".hbs",
  }).engine
);
app.set("view engine", ".hbs");

// middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

// routes

app.use("/apiTask/v1.0", tasksRoutes);
app.use("/apiTask/v1.0", aboutMeRoutes);

// public route
app.use(express.static(path.join(__dirname, "public")));

// error handler
app.use(errorHandler);
export default app;
