/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ui5webapp/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
