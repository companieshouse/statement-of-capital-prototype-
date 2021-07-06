var classes = [
	"A Ordinary",
	"B Ordinary",
	"C Ordinary",
	"D Ordinary",
	"Ordinary",
	"Ordinary A",
	"Ordinary B",
	"Ordinary C",
	"Ordinary D",
	"Ordinary E",
	"Ordinary F",
	"Ordinary G",
	"Ordinary H",
	"Ordinary I",
	"Ordinary J",
	"Ordinary K",
	"Deferred ordinary",
	"Preference",
	"Redeemable",
	"Redeemable preference",
  ]
  var element = document.querySelector('#class')
  var id = 'autocomplete-default'
  accessibleAutocomplete({element: element, id: id, source: classes})
  