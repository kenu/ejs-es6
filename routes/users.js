import express from 'express';
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource    <p><a href="/">home</a></p>  ');
});

export default router;
