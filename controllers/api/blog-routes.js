const router = require('express').Router();
const { Blog } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/blog', async (req, res) => {

  res.render('blog');
});

router.get('/dashboard', async (req, res) => {

  res.render('dashboard');
});

router.post('/dashboard', withAuth, async (req, res) => {
  try {
    const newBlog = await Blog.create({
      ...title,
      ...author,
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newBlog);
  } catch (err) {
    res.status(400).json(err);
  }
});




module.exports = router;