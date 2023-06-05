const router = require('express').Router();
const { Blog, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/blog', async (req, res) => {
  try {
      const blogData = await Blog.findAll({
          include: [
              {
                  model: User,
                  attributes: ['name'],
              },
          ],
      });
      const blogs = blogData.map((blog) => blog.get({ plain: true }));

      // Pass serialized data and session flag into template
      res.render('blog', { 
        blogs, 
        logged_in: req.session.logged_in 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  
});

router.get('/blog/:id', async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const blog = blogData.get({ plain: true });

    res.render('blogs', {
      ...blog,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/dashboard', async (req, res) => {

  res.render('dashboard');
});

router.post('/blog', withAuth, async (req, res) => {
  console.log(req.session.user_id)
  try {
    const newBlog = await Blog.create({
      blog_name: req.body.blog_name,
      author_name: req.body.author_name,
      body: req.body.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newBlog);
  } catch (err) {
    res.status(400).json(err);
  }
});




module.exports = router;