(function () {
	"use strict";

	var lh = require('../builder/lineage_hunter');

	exports['lineage hunter '] = {
		'test lineage hunter finds lineage' : function(test){

			//setup current pattern from what we would have during execution
			var currentPattern = {
				"name": "02-organisms-00-global-00-header",
				"subdir": "02-organisms\\00-global",
				"filename": "00-header.mustache",
				"data": null,
				"template": "<!-- Begin .header -->\r\n<header class=\"header cf\" role=\"banner\">\r\n\t{{> atoms-logo }}\r\n\t<a href=\"#\" class=\"nav-toggle nav-toggle-search icon-search\"><span class=\"is-vishidden\">Search</span></a>\r\n\t<a href=\"#\" class=\"nav-toggle nav-toggle-menu icon-menu\"><span class=\"is-vishidden\">Menu</span></a>\r\n\t{{> molecules-primary-nav }}\r\n\t{{> molecules-search }}\r\n</header>\r\n<!-- End .header -->\r\n",
				"patternPartial": "<!-- Begin .header -->\r\n<header class=\"header cf\" role=\"banner\">\r\n<a href=\"/\"><img src=\"../../images/logo.png\" class=\"logo\" alt=\"Logo Alt Text\" /></a>\t<a href=\"#\" class=\"nav-toggle nav-toggle-search icon-search\"><span class=\"is-vishidden\">Search</span></a>\r\n\t<a href=\"#\" class=\"nav-toggle nav-toggle-menu icon-menu\"><span class=\"is-vishidden\">Menu</span></a>\r\n<nav id=\"nav\" class=\"nav\">\r\n\t<ul>\r\n\t\t<li><a href=\"#\">Home</a></li>\r\n\t\t<li><a href=\"#\">About</a></li>\r\n\t\t<li><a href=\"#\">Blog</a></li>\r\n\t\t<li><a href=\"#\">Contact</a></li>\r\n\t</ul>\r\n</nav><!--end .nav-->\r\n<form action=\"#\" method=\"post\" class=\"inline-form search-form\">           \r\n    <fieldset>\r\n\t    <legend class=\"is-vishidden\">Search</legend>\r\n\t    <label for=\"search-field\" class=\"is-vishidden\">Search</label>\r\n\t    <input type=\"search\" placeholder=\"Search\" id=\"search-field\" class=\"search-field\" />\r\n\t    <button class=\"search-submit\">\r\n\t    \t<span class=\"icon-search\" aria-hidden=\"true\"></span>\r\n\t    \t<span class=\"is-vishidden\">Search</span>\r\n\t    </button>\r\n    </fieldset>\r\n</form></header>\r\n<!-- End .header -->\r\n",
				"patternName": "header",
				"patternLink": "02-organisms-00-global-00-header/02-organisms-00-global-00-header.html",
				"patternGroup": "organisms",
				"patternSubGroup": "organisms\\00-global",
				"flatPatternPath": "02-organisms\\00-global",
				"patternState": "",
				"lineage": [],
				"lineageIndex": [],
				"lineageR": [],
				"lineageRIndex": []
			};
			var patternlab = {
				patterns: [
				{
					"name": "00-atoms-03-images-00-logo",
					"subdir": "00-atoms\\03-images",
					"filename": "00-logo.mustache",
					"data": null,
					"template": "<a href=\"/\"><img src=\"../../images/logo.png\" class=\"logo\" alt=\"Logo Alt Text\" /></a>",
					"patternPartial": "<a href=\"/\"><img src=\"../../images/logo.png\" class=\"logo\" alt=\"Logo Alt Text\" /></a>",
					"patternName": "logo",
					"patternLink": "00-atoms-03-images-00-logo/00-atoms-03-images-00-logo.html",
					"patternGroup": "atoms",
					"patternSubGroup": "atoms\\03-images",
					"flatPatternPath": "00-atoms\\03-images",
					"patternState": "",
					"lineage": [],
					"lineageIndex": [],
					"lineageR": [],
					"lineageRIndex": []
				},
				{
					"name": "01-molecules-05-navigation-00-primary-nav",
					"subdir": "01-molecules\\05-navigation",
					"filename": "00-primary-nav.mustache",
					"data": null,
					"template": "<nav id=\"nav\" class=\"nav\">\r\n\t<ul>\r\n\t\t<li><a href=\"#\">Home</a></li>\r\n\t\t<li><a href=\"#\">About</a></li>\r\n\t\t<li><a href=\"#\">Blog</a></li>\r\n\t\t<li><a href=\"#\">Contact</a></li>\r\n\t</ul>\r\n</nav><!--end .nav-->\r\n",
					"patternPartial": "<nav id=\"nav\" class=\"nav\">\r\n\t<ul>\r\n\t\t<li><a href=\"#\">Home</a></li>\r\n\t\t<li><a href=\"#\">About</a></li>\r\n\t\t<li><a href=\"#\">Blog</a></li>\r\n\t\t<li><a href=\"#\">Contact</a></li>\r\n\t</ul>\r\n</nav><!--end .nav-->\r\n",
					"patternName": "primary-nav",
					"patternLink": "01-molecules-05-navigation-00-primary-nav/01-molecules-05-navigation-00-primary-nav.html",
					"patternGroup": "molecules",
					"patternSubGroup": "molecules\\05-navigation",
					"flatPatternPath": "01-molecules\\05-navigation",
					"patternState": "",
					"lineage": [],
					"lineageIndex": [],
					"lineageR": [],
					"lineageRIndex": []
				},
				{
					"name": "01-molecules-04-forms-00-search",
					"subdir": "01-molecules\\04-forms",
					"filename": "00-search.mustache",
					"data": null,
					"template": "<form action=\"#\" method=\"post\" class=\"inline-form search-form\">           \r\n    <fieldset>\r\n\t    <legend class=\"is-vishidden\">Search</legend>\r\n\t    <label for=\"search-field\" class=\"is-vishidden\">Search</label>\r\n\t    <input type=\"search\" placeholder=\"Search\" id=\"search-field\" class=\"search-field\" />\r\n\t    <button class=\"search-submit\">\r\n\t    \t<span class=\"icon-search\" aria-hidden=\"true\"></span>\r\n\t    \t<span class=\"is-vishidden\">Search</span>\r\n\t    </button>\r\n    </fieldset>\r\n</form>",
					"patternPartial": "<form action=\"#\" method=\"post\" class=\"inline-form search-form\">           \r\n    <fieldset>\r\n\t    <legend class=\"is-vishidden\">Search</legend>\r\n\t    <label for=\"search-field\" class=\"is-vishidden\">Search</label>\r\n\t    <input type=\"search\" placeholder=\"Search\" id=\"search-field\" class=\"search-field\" />\r\n\t    <button class=\"search-submit\">\r\n\t    \t<span class=\"icon-search\" aria-hidden=\"true\"></span>\r\n\t    \t<span class=\"is-vishidden\">Search</span>\r\n\t    </button>\r\n    </fieldset>\r\n</form>",
					"patternName": "search",
					"patternLink": "01-molecules-04-forms-00-search/01-molecules-04-forms-00-search.html",
					"patternGroup": "molecules",
					"patternSubGroup": "molecules\\04-forms",
					"flatPatternPath": "01-molecules\\04-forms",
					"patternState": "",
					"lineage": [],
					"lineageIndex": [],
					"lineageR": [],
					"lineageRIndex": []
				}
				]
			};

			var lineage_hunter = new lh();
			lineage_hunter.find_lineage(currentPattern, patternlab);

			test.equals(currentPattern.lineageIndex.length, 3);
			test.equals(currentPattern.lineageIndex[0], "atoms-logo");
			test.equals(currentPattern.lineageIndex[1], "molecules-primary-nav");
			test.equals(currentPattern.lineageIndex[2], "molecules-search");

			test.done();
		}
	};

}());