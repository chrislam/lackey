// lackey.js
// Chris Lam 2013
// A library of functions to decode and group keyCodes from JavaScript (jQuery)

var lackey = lackey || {};

lackey.IsAKeyboardNumberKey = function (event) {
	return $.inArray(event.which, [48, 49, 50, 51, 52, 53, 54, 55, 56, 57]) != -1;
};

lackey.IsSpaceKey = function (event) {
	return event.which == 32;
};

lackey.IsEnterKey = function (event) {
	return event.which == 13;
};

lackey.IsTabKey = function (event) {
	return event.which == 9;
};

lackey.IsEscapeKey = function (event) {
	return event.which == 27;
};

lackey.IsBackspaceKey = function (event) {
	return event.which == 8;
};

lackey.IsDeleteKey = function (event) {
	return event.which == 46;
};

lackey.IsASymbolKey = function (event) {
	return $.inArray(event.which, [59, 61, 188, 109, 190, 191, 192, 219, 220, 221, 222]) != -1;
};

lackey.IsAnAlphabeticKey = function (event) {
	return $.inArray(event.which, [65, 66, 67, 68, 69]) != -1;
};

lackey.IsAModifierKey = function (event) {
	return $.inArray(event.which, [16, 17, 18, 20, 144]) != -1;
};

lackey.IsAnArrowKey = function (event) {
	return $.inArray(event.which, [37, 38, 39, 40]) != -1;
};

lackey.IsASpecialKey = function (event) {
	return $.inArray(event.which, [45, 46, 36, 35, 33, 34]) != -1;
};

lackey.IsAFunctionKey = function (event) {
	return $.inArray(event.which, [112, 113, 114]) != -1;
};

