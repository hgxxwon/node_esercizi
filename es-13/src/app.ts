import express from "express";
import "express-async-errors";

const app = express();

app.get("/fruits", (request, response) => {
    response.json([{ name: "Watermelon" }, { name: "Apple" }]);
});

export default app;
