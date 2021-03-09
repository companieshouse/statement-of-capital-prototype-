const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
// Branching
router.post('/examples/branching/over-18-answer', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.session.data['over-18']

  if (over18 === 'false') {
    res.redirect('/docs/examples/branching/under-18')
  } else {
    res.redirect('/docs/examples/branching/over-18')
  }
})

// Branching
router.get('/change-answer', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const change = req.session.data['form-code']

  if (change === 'SH01') {
    res.redirect('/user-journeys/SH01/date-of-allotment')
  } else {
    res.redirect('/docs/examples/branching/over-18')
  }
})

module.exports = router
