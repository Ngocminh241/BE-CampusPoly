var express = require('express');
var router = express.Router();

//====================== Khai báo ==========================//
// Routes
const userRouter = require('./users/userRoutes');
const postRoutes = require('./posts/postRoutes');
//====================== Sử dụng ==========================//
//Routes
router.use('/api/v1/users', userRouter);
router.use('/api/v1/posts', postRoutes);

//
const fs = require('fs');
const path = require('path');
const renderPartial = (partialName) => {
  const partialPath = path.join(__dirname, '../views/partials', `${partialName}.hbs`);
  return fs.readFileSync(partialPath, 'utf8');
};
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'LOGIN' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'LOGIN' });
});
// router.get("/post", function(req, res, next) {
//   const content = renderPartial('post');
//   res.render('main', { 
//       title: 'Bài viết',
//       body: content,
//   });
// });
// Route cho trang bài viết (post)
router.get("/posts", function(req, res, next) {
  try {
    const content = renderPartial('post'); // Đọc nội dung từ partial 'post.hbs'
    res.render('main', { 
      title: 'Bài viết',
      body: content  // Nhúng nội dung vào layout chính
    });
  } catch (err) {
    console.error(err.message); // In ra thông báo lỗi nếu không tìm thấy file
    res.status(500).send("Error rendering partial: " + err.message);
  }
});

router.get('/users', function(req, res, next) {
  try {
    const content = renderPartial('user'); // Đọc nội dung từ partial 'post.hbs'
    res.render('main', { 
      title: 'Quản lý người dùng',
      body: content  // Nhúng nội dung vào layout chính
    });
  } catch (err) {
    console.error(err.message); // In ra thông báo lỗi nếu không tìm thấy file
    res.status(500).send("Error rendering partial: " + err.message);
  }
});

router.get('/groups', function(req, res, next) {
  try {
    const content = renderPartial('group'); // Đọc nội dung từ partial 'post.hbs'
    res.render('main', { 
      title: 'Quản lý nhóm',
      body: content  // Nhúng nội dung vào layout chính
    });
  } catch (err) {
    console.error(err.message); // In ra thông báo lỗi nếu không tìm thấy file
    res.status(500).send("Error rendering partial: " + err.message);
  }
});

router.get('/reposts', function(req, res, next) {
  try {
    const content = renderPartial('repost'); // Đọc nội dung từ partial 'post.hbs'
    res.render('main', { 
      title: 'Báo cáo bài viết',
      body: content  // Nhúng nội dung vào layout chính
    });
  } catch (err) {
    console.error(err.message); // In ra thông báo lỗi nếu không tìm thấy file
    res.status(500).send("Error rendering partial: " + err.message);
  }
});
router.get("/create_posts", function(req, res, next) {
  try {
    const content = renderPartial('create_post'); // Đọc nội dung từ partial 'post.hbs'
    res.render('main', { 
      title: 'Tạo bài viết',
      body: content  // Nhúng nội dung vào layout chính
    });
  } catch (err) {
    console.error(err.message); // In ra thông báo lỗi nếu không tìm thấy file
    res.status(500).send("Error rendering partial: " + err.message);
  }
});
module.exports = router;
