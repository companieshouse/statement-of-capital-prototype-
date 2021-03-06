var currencies = [
	'United Arab Emirates dirham, AED (د.إ.‏)',
	'Afghan afghani, AFN (؋)',
	'Albanian lek, ALL (Lek)',
	'Armenian dram, AMD (դր.)',
	'Netherlands Antillean guilder, ANG (NAƒ)',
	'Angolan kwanza, AOA (Kz)',
	'Argentine peso, ARS ($)',
	'Australian dollar, AUD ($)',
	'Aruban florin, AWG (Afl)',
	'Azerbaijani manat, AZN (ман)',
	'Bosnia and Herzegovina convertible mark, BAM (KM)',
	'Barbadian dollar, BBD ($)',
	'Bangladeshi taka, BDT (৳)',
	'Bulgarian lev, BGN (лв.)',
	'Bahraini dinar, BHD (د.ب.‏)',
	'Burundian franc, BIF (FBu)',
	'Bermudian dollar, BMD ($)',
	'Brunei dollar, BND ($)',
	'Bolivian boliviano, BOB (Bs)',
	'Brazilian real, BRL (R$)',
	'Bahamian dollar, BSD ($)',
	'Bhutanese ngultrum, BTN (Nu.)',
	'Botswana pula, BWP (P)',
	'Belarusian ruble, BYN (руб.)',
	'Belize dollar, BZD ($)',
	'Canadian dollar, CAD ($)',
	'Congolese franc, CDF (FrCD)',
	'Swiss franc, CHF (CHF)',
	'Chilean peso, CLP ($)',
	'Chinese yuan, CNY (CN¥)',
	'Colombian peso, COP ($)',
	'Costa Rican colón, CRC (₡)',
	'Cuban convertible peso, CUC ($)',
	'Cuban peso, CUP ($)',
	'Cape Verdean escudo, CVE (CV$)',
	'Czech koruna, CZK (Kč)',
	'Djiboutian franc, DJF (Fdj)',
	'Danish krone, DKK (kr)',
	'Dominican peso, DOP (RD$)',
	'Algerian dinar, DZD (د.ج.)',
	'Egyptian pound, EGP (ج.م.)',
	'Eritrean nakfa, ERN (Nfk)',
	'Ethiopian birr, ETB (Br)',
	'EURO, EUR (€)',
	'Fijian dollar, FJD (FJ$)',
	'Falkland Islands pound, FKP (£)',
	'Pound sterling, GBP (£)',
	'Georgian lari, GEL (GEL)',
	'Guernsey pound, GGP (£)',
	'Ghanaian cedi, GHS (GH₵)',
	'Gibraltar pound, GIP (£)',
	'Gambian dalasi, GMD (D)',
	'Guinean franc, GNF (FG)',
	'Guatemalan quetzal, GTQ (Q)',
	'Guyanese dollar, GYD ($)',
	'Hong Kong dollar, HKD ($)',
	'Honduran lempira, HNL (L)',
	'Croatian kuna, HRK (kn)',
	'Haitian gourde, HTG (G)',
	'Hungarian forint, HUF (Ft)',
	'Indonesian rupiah, IDR (Rp)',
	'Israeli new shekel, ILS (₪)',
	'Manx pound, IMP (£)',
	'Indian rupee, INR (টকা)',
	'Iraqi dinar, IQD (د.ع.)',
	'Iranian rial, IRR (﷼)',
	'Icelandic króna, ISK (kr)',
	'Jersey pound, JEP (£)',
	'Jamaican dollar, JMD ($)',
	'Jordanian dinar, JOD (د.أ.)',
	'Japanese yen, JPY (￥)',
	'Kenyan shilling, KES (Ksh)',
	'Kyrgyzstani som, KGS (Som sign.svg)',
	'Cambodian riel, KHR (Лв)',
	'Kiribati dollar, KID ($)',
	'Comorian franc, KMF (FC)',
	'North Korean won, KPW (₩)',
	'South Korean won, KRW (₩)',
	'Kuwaiti dinar, KWD (د.ك.)',
	'Cayman Islands dollar, KYD ($)',
	'Kazakhstani tenge, KZT (тңг.)',
	'Lao kip, LAK (₭)',
	'Lebanese pound, LBP (ل.ل.)',
	'Sri Lankan rupee, LKR (SL Re)',
	'Liberian dollar, LRD ($)',
	'Lesotho loti, LSL (L)',
	'Libyan dinar, LYD (د.ل.)',
	'Moroccan dirham, MAD (د.م.)',
	'Moldovan leu, MDL (MDL)',
	'Malagasy ariary, MGA (MGA)',
	'Macedonian denar, MKD (MKD)',
	'Burmese kyat, MMK (K)',
	'Mongolian tögrög, MNT (₮)',
	'Macanese pataca, MOP (MOP$)',
	'Mauritanian ouguiya, MRU (UM)',
	'Mauritian rupee, MUR (₨)',
	'Maldivian rufiyaa, MVR (Rf)',
	'Malawian kwacha, MWK (K)',
	'Mexican peso, MXN ($)',
	'Malaysian ringgit, MYR (RM)',
	'Mozambican metical, MZN (MTn)',
	'Namibian dollar, NAD (N$)',
	'Nigerian naira, NGN (₦)',
	'Nicaraguan córdoba, NIO (C$)',
	'Norwegian krone, NOK (kr)',
	'Nepalese rupee, NPR (नेरू)',
	'New Zealand dollar, NZD ($)',
	'Omani rial, OMR (ر.ع.)',
	'Panamanian balboa, PAB (B/.)',
	'Peruvian sol, PEN (S/.)',
	'Papua New Guinean kina, PGK (K)',
	'Philippine peso, PHP (₱)',
	'Pakistani rupee, PKR (₨)',
	'Polish złoty, PLN (zł)',
	'Transnistrian ruble, PRB (руб/р)',
	'Paraguayan guaraní, PYG (₲)',
	'Qatari riyal, QAR (ر.ق.)',
	'Romanian leu, RON (RON)',
	'Serbian dinar, RSD (дин.)',
	'Russian ruble, RUB (₽.)',
	'Rwandan franc, RWF (FR)',
	'Saudi riyal, SAR (ر.س.)',
	'Sudanese Pound, SDG (SDG)',
	'Swedish krona, SEK (kr)',
	'Singapore dollar, SGD ($)',
	'Saint Helena pound, SHP (£)',
	'Sierra Leonean leone, SLL (Le)',
	'Somaliland shilling, SLS (Sl. Sh.)',
	'Somali shilling, SOS (Ssh)',
	'Surinamese dollar, SRD ($)',
	'South Sudanese pound, SSP (SS£)',
	'São Tomé and Príncipe dobra, STN (Db)',
	'Syrian pound, SYP (ل.س.)',
	'Swazi lilangeni, SZL (	L)',
	'Thai baht, THB (฿)',
	'Tajikistani somoni, TJS (SM)',
	'Turkmenistan manat, TMT (T)',
	'Tunisian dinar, TND (د.ت.)',
	'Tongan paʻanga, TOP (T$)',
	'Turkish lira, TRY (TL)',
	'Trinidad and Tobago dollar, TTD ($)',
	'Tuvaluan dollar, TVD ($)',
	'New Taiwan dollar, TWD (NT$)',
	'Tanzanian shilling, TZS (TSh)',
	'Ukrainian hryvnia, UAH (₴)',
	'Ugandan shilling, UGX (USh)',
	'United States dollar, USD ($)',
	'Uruguayan peso, UYU ($)',
	'Uzbekistani soʻm, UZS (UZS)',
	'Venezuelan bolívar soberano, VES (Bs.S)',
	'Vietnamese đồng, VND (₫)',
	'Vanuatu vatu, VUV (VT)',
	'Samoan tālā, WST ($)',
	'Central African CFA franc, XAF (FCFA)',
	'Eastern Caribbean dollar, XCD ($)',
	'West African CFA franc, XOF (CFA)',
	'CFP franc, XPF (₣)',
	'South African rand, ZAR (R)',
	'Zambian kwacha, ZMW (ZK)',
	'Zimbabwean bonds, ZWB (ZWL$)',
  ]
  var element = document.querySelector('#currency')
  var id = 'autocomplete-default'
  accessibleAutocomplete({element: element, id: id, source: currencies})
  