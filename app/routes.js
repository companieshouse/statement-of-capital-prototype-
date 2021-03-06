const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Branching
router.get('/change-answer', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const change = req.session.data['form']
  if (change === 'SH10') {
    res.redirect('/user-journeys/SH10/date')
  }
  if (change === 'RP04') {
    res.redirect('/user-journeys/confirmation-statement/edit-the-statement-of-capital')
  }
  if (change === 'other') {
    res.redirect('/default-pages/change-stop-screen')
  }
  if (change === 'SH08') {
    res.redirect('/user-journeys/SH08/date')
  }
  if (change === 'other') {
    res.redirect('https://www.gov.uk/government/collections/forms-to-update-shares')
  }
  if (change === 'CS') {
    res.redirect('/user-journeys/confirmation-statement/edit-the-statement-of-capital')
  } else {
    res.redirect('/dynamic-pages/date')
  }
})

router.get('/soc-answer', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const soc = req.session.data['statement-of-capital']
  if (soc === 'yes') {
    res.redirect('default-pages/confirmation')
  } else {
    res.redirect('default-pages/change')
  }
})

router.get('/update-answer', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const update = req.session.data['update']
  if (update === 'notify') {
    res.redirect('/default-pages/change')
  } else {
    res.redirect('/user-journeys/confirmation-statement/edit-the-statement-of-capital')
  }
})

router.get('/rights-answer', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const rights = req.session.data['share-rights']
  if (rights === 'yes') {
    res.redirect('/user-journeys/SH10/date')
  } else {
    res.redirect('/user-journeys/SH08/check-your-answers')
  }
})

router.get('/need-resolution-answer', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const resolution = req.session.data['need-resolution']
  if (resolution === 'yes') {
    res.redirect('/attach-a-special-resolution')
  } else {
    res.redirect('default-pages/change')
  }
})

router.get('/another-update-answer', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const update = req.session.data['another-update']
  if (update === 'yes') {
    res.redirect('/default-pages/change')
  } else {
    res.redirect('/default-pages/confirmation')
  }
})

router.get('/paid-answer', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const paid = req.session.data['shares-paid']
  if (paid === 'yes') {
    res.redirect('dynamic-pages/payment-method')
  } else
  if (paid === 'partly-paid') {
    res.redirect('dynamic-pages/payment-method')
  } else {
    res.redirect('dynamic-pages/unpaid')
  }
})

router.get('/method-answer', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const method = req.session.data['paid-method']
  if (method === 'non-cash') {
    res.redirect('dynamic-pages/non-cash')
  } else {
    res.redirect('dynamic-pages/cash')
  }
})

router.get('/cash-answer', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const paid = req.session.data['shares-paid']
  const method = req.session.data['paid-method']
  if (paid === 'yes') {
    if (method === 'cash') {
      res.redirect('dynamic-pages/prescribed-particulars')
    } else { res.redirect('dynamic-pages/non-cash') }
  }

  if (paid === 'partly-paid') {
    if (method === 'cash') { res.redirect('dynamic-pages/unpaid') } else { res.redirect('dynamic-pages/non-cash') }
  } else {
    res.redirect('dynamic-pages/non-cash')
  }
})

router.get('/non-cash-answer', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const paid = req.session.data['shares-paid']
  if (paid === 'yes') {
    res.redirect('dynamic-pages/prescribed-particulars')
  } else {
    res.redirect('dynamic-pages/unpaid')
  }
})

module.exports = router
