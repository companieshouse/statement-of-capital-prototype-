const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Branching
router.get('/change-answer', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const change = req.session.data['form']
  if (change === 'SH01') {
    res.redirect('/user-journeys/SH01/date-of-allotment')
  } else if (change === 'SH06') {
    res.redirect('/user-journeys/SH01/date-of-allotment')
  } else {
    res.redirect('/user-journeys/not-developed-yet')
  }
})

router.get('/soc-answer', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const soc = req.session.data['statement-of-capital']
  if (soc === 'yes') {
    res.redirect('/confirmation-page')
  } else {
    res.redirect('/template-pages/default-pages/change')
  }
})

module.exports = router
