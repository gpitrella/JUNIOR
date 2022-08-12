import express from "express";
import exphbs from "express-handlebars";
import session from "express-session";
import methodOverride from "method-override";
import flash from "connect-flash";
import passport from "passport";
import morgan from "morgan";
import MongoStore from "connect-mongo";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

import { MONGODB_URI, PORT } from "./config.js";

import indexRoutes from "./routes/index.routes.js";
import notesRoutes from "./routes/notes.routes.js";
import userRoutes from "./routes/auth.routes.js";
import "./config/passport.js";

// Initializations
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

// settings
app.set("port", PORT);
app.set("views", join(__dirname, "views")); // REPLAY POR REACT

// config view engine // REPLAY POR REACT - USA EXPRESS HANDLEBARS
const hbs = exphbs.create({
  defaultLayout: "main",
  layoutsDir: join(app.get("views"), "layouts"),
  partialsDir: join(app.get("views"), "partials"),
  extname: ".hbs",
});
app.engine(".hbs", hbs.engine); // REPLAY POR REACT - USA EXPRESS HANDLEBARS
app.set("view engine", ".hbs"); // REPLAY POR REACT - USA EXPRESS HANDLEBARS

// middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method")); // Sirve para que formulario envie no solo get, put, sino delete o post. 
app.use( // Sirve para mantener una session del usuario.
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: MONGODB_URI }),
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Global Variables
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  res.locals.user = req.user || null;
  next();
});

// Routes
app.use(indexRoutes);
app.use(userRoutes);
app.use(notesRoutes);

// static files 
app.use(express.static(join(__dirname, "public"))); // Reemplazar por REACT

app.use((req, res) => {
  res.render("404");
});

export default app;
