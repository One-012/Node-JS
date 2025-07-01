import { Router } from "express";

const postsRouter = Router();

postsRouter.get("/", (req, res) => {
    res.json({ message: "Danh sách bài viết" });
});

postsRouter.post("/", (req, res) => {
    res.json({ message: "Thêm bài viết mới" });
});

export default postsRouter;