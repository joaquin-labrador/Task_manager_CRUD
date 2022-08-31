import { Router } from "express";
const router = Router();
//routes
router.get("/aboutMe", (req, res) => {
  res.render("about.me.hbs");
});

export default router;
