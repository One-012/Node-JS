import express from 'express';

const router = express.Router();

let posts = [
    {id: 1, title: "bài viết 1", content: "Nội dung bài viết 1"},
    {id: 2, title: "bài viết 2", content: "Nội dung bài viết 2"},
];

router.get("/", (req, res) => {
    try {
        const {search} = req.query;

        let results = posts;

        if (search) {
            const keyword = search.toLowerCase();
            results = posts.filter(post => 
                post.title.toLowerCase().includes(keyword)
            );
        }
        if (results.length === 0) {
            return res.status(404).json({ error: "Không tìm thấy bài viết nào" });
        }

         res.json(results);
    } catch (error) {
        res.status(500).json({ error: "Lỗi máy chủ" });
    }
   
});

router.get("/:id", (req, res) => {
    const post = posts.find((p) => p.id == req.params.id);
    if (!post) return res.status(404).json({ error: "Bài viết không tồn tại" });
    res.json(post);
});

router.post("/", (req, res) => {
    const { title, content } = req.body;
    const newPost = { id : Date.now(), title, content };
    posts.push(newPost);
    res.status(201).json(newPost);
});

router.put("/:id", (req, res) => {
    const post = posts.find((p) => p.id == req.params.id);
    if (!post) return res.status(404).json({ error: "Bài viết không tồn tại" });

    const { title, content } = req.body;
    post.title = title || post.title;
    post.content = content || post.content;

    res.json(post);
    
});

router.delete("/:id", (req, res) => {
    const index = posts.findIndex((p) => p.id == req.params.id);
    if(index === -1) return res.status(404).json({ error: "Bài viết không tồn tại" });

    posts.splice(index, 1);
    res.json({ success: true, message: "Bài viết đã được xóa" });
});

export default router;

