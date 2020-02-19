"use strict";

var helpers = require("../../helpers/helpers");

exports["US/Hawaii"] = {

	"guess:by:offset" : helpers.makeTestGuess("US/Hawaii", { offset: true, expect: "Pacific/Tahiti" }),

	"guess:by:abbr" : helpers.makeTestGuess("US/Hawaii", { abbr: true, expect: "Pacific/Honolulu" }),

	"1933" : helpers.makeTestYear("US/Hawaii", [
		["1933-04-30T12:29:59+00:00", "01:59:59", "HST", 630],
		["1933-04-30T12:30:00+00:00", "03:00:00", "HDT", 570],
		["1933-05-21T21:29:59+00:00", "11:59:59", "HDT", 570],
		["1933-05-21T21:30:00+00:00", "11:00:00", "HST", 630]
	]),

	"1942" : helpers.makeTestYear("US/Hawaii", [
		["1942-02-09T12:29:59+00:00", "01:59:59", "HST", 630],
		["1942-02-09T12:30:00+00:00", "03:00:00", "HWT", 570]
	]),

	"1945" : helpers.makeTestYear("US/Hawaii", [
		["1945-08-14T22:59:59+00:00", "13:29:59", "HWT", 570],
		["1945-08-14T23:00:00+00:00", "13:30:00", "HPT", 570],
		["1945-09-30T11:29:59+00:00", "01:59:59", "HPT", 570],
		["1945-09-30T11:30:00+00:00", "01:00:00", "HST", 630]
	]),

	"1947" : helpers.makeTestYear("US/Hawaii", [
		["1947-06-08T12:29:59+00:00", "01:59:59", "HST", 630],
		["1947-06-08T12:30:00+00:00", "02:30:00", "HST", 600]
	])
};