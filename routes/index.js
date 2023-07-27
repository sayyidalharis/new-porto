const express = require('express');
const router = express.Router();

// Home page
router.get('/', (req, res) => {
  res.render('home', { pageTitle: 'Home', currentYear: new Date().getFullYear() });
});

// Portfolio page
router.get('/portfolio', (req, res) => {
  res.render('portfolio', { pageTitle: 'Home', currentYear: new Date().getFullYear() });
});

// Education page
router.get('/education', (req, res) => {
  res.render('education', { pageTitle: 'Home', currentYear: new Date().getFullYear() });
});

// Contact page
router.get('/contact', (req, res) => {
  res.render('contact', { pageTitle: 'Home', currentYear: new Date().getFullYear() });
});

module.exports = router;
