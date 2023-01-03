import express from "express";

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/test", (req, res) => {
  console.log("working");
  return res.json({ status: "Working" });
});

app.listen(PORT, () => {
  console.log("App is running at " + PORT);
});
