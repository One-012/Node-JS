
router.get("/greet", (req, res) => {
    const name = req.query.name || "bạn"; 
    res.json({ message: `Xin chào, ${name}!` }); 
});


router.get("/sum", (req, res) => {
    const a = parseInt(req.query.a, 10) || 0; 
    const b = parseInt(req.query.b, 10) || 0; 
    res.json({ sum: a + b });
});