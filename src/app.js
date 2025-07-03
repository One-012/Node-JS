import express from "express";
import dotenv from "dotenv";
import postsRouter from "./routers/posts.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/posts", postsRouter);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});