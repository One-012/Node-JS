import express from "express";
import dotenv from "dotenv";
import postsRouter from "./routers/posts.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use("/api/posts", postsRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});