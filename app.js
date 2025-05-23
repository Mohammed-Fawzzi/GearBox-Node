const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const AppError = require("./utils/appError");
const globalErrorHandler = require("./Controller/errorController");
const technologyRouter = require("./routes/technologyRoutes");
const spacesRouter = require("./routes/spacesRoutes");
const academyRouter = require("./routes/academyRoutes");
const contactRouter = require("./routes/contactRoutes");
const userRouter = require("./routes/userRoutes");
const reviewRouter = require("./routes/reviewRoutes");
const packageRouter = require("./routes/packageRoutes");
const bookingRouter = require("./routes/bookingRoutes");
const customebookingRouter = require("./routes/customeBookingRoutes");

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "Views")));

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://127.0.0.1:3000",
      "https://gearbox-node-production.up.railway.app",
    ],
    credentials: true,
  })
);

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use((req, res, next) => {
  console.log("Hello from the middleware 👋");
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use("/api/v1/spaces", spacesRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/technology", technologyRouter);
app.use("/api/v1/academy", academyRouter);
app.use("/api/v1/contact", contactRouter);
app.use("/api/v1/reviews", reviewRouter);
app.use("/api/v1/packages", packageRouter);
app.use("/api/v1/bookings", bookingRouter);
app.use("/api/v1/customebookings", customebookingRouter);

app.use(express.static(path.join(__dirname, "dist")));

// Fallback to index.html for other routes (for React Router)
app.use((req, res, next) => {
  if (req.path.startsWith("/api")) {
    return res.status(404).json({ message: "API route not found" });
  }
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.use(globalErrorHandler);

module.exports = app;