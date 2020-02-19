"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Aqtobe"] = {

	"guess:by:offset" : helpers.makeTestGuess("Asia/Aqtobe", { offset: true, expect: "Indian/Maldives" }),

	"guess:by:abbr" : helpers.makeTestGuess("Asia/Aqtobe", { abbr: true, expect: "Indian/Maldives" }),

	"1924" : helpers.makeTestYear("Asia/Aqtobe", [
		["1924-05-01T20:11:19+00:00", "23:59:59", "LMT", -13720 / 60],
		["1924-05-01T20:11:20+00:00", "00:11:20", "+04", -240]
	]),

	"1930" : helpers.makeTestYear("Asia/Aqtobe", [
		["1930-06-20T19:59:59+00:00", "23:59:59", "+04", -240],
		["1930-06-20T20:00:00+00:00", "01:00:00", "+05", -300]
	]),

	"1981" : helpers.makeTestYear("Asia/Aqtobe", [
		["1981-03-31T18:59:59+00:00", "23:59:59", "+05", -300],
		["1981-03-31T19:00:00+00:00", "01:00:00", "+06", -360],
		["1981-09-30T17:59:59+00:00", "23:59:59", "+06", -360],
		["1981-09-30T18:00:00+00:00", "00:00:00", "+06", -360]
	]),

	"1982" : helpers.makeTestYear("Asia/Aqtobe", [
		["1982-03-31T17:59:59+00:00", "23:59:59", "+06", -360],
		["1982-03-31T18:00:00+00:00", "00:00:00", "+06", -360],
		["1982-09-30T17:59:59+00:00", "23:59:59", "+06", -360],
		["1982-09-30T18:00:00+00:00", "23:00:00", "+05", -300]
	]),

	"1983" : helpers.makeTestYear("Asia/Aqtobe", [
		["1983-03-31T18:59:59+00:00", "23:59:59", "+05", -300],
		["1983-03-31T19:00:00+00:00", "01:00:00", "+06", -360],
		["1983-09-30T17:59:59+00:00", "23:59:59", "+06", -360],
		["1983-09-30T18:00:00+00:00", "23:00:00", "+05", -300]
	]),

	"1984" : helpers.makeTestYear("Asia/Aqtobe", [
		["1984-03-31T18:59:59+00:00", "23:59:59", "+05", -300],
		["1984-03-31T19:00:00+00:00", "01:00:00", "+06", -360],
		["1984-09-29T20:59:59+00:00", "02:59:59", "+06", -360],
		["1984-09-29T21:00:00+00:00", "02:00:00", "+05", -300]
	]),

	"1985" : helpers.makeTestYear("Asia/Aqtobe", [
		["1985-03-30T20:59:59+00:00", "01:59:59", "+05", -300],
		["1985-03-30T21:00:00+00:00", "03:00:00", "+06", -360],
		["1985-09-28T20:59:59+00:00", "02:59:59", "+06", -360],
		["1985-09-28T21:00:00+00:00", "02:00:00", "+05", -300]
	]),

	"1986" : helpers.makeTestYear("Asia/Aqtobe", [
		["1986-03-29T20:59:59+00:00", "01:59:59", "+05", -300],
		["1986-03-29T21:00:00+00:00", "03:00:00", "+06", -360],
		["1986-09-27T20:59:59+00:00", "02:59:59", "+06", -360],
		["1986-09-27T21:00:00+00:00", "02:00:00", "+05", -300]
	]),

	"1987" : helpers.makeTestYear("Asia/Aqtobe", [
		["1987-03-28T20:59:59+00:00", "01:59:59", "+05", -300],
		["1987-03-28T21:00:00+00:00", "03:00:00", "+06", -360],
		["1987-09-26T20:59:59+00:00", "02:59:59", "+06", -360],
		["1987-09-26T21:00:00+00:00", "02:00:00", "+05", -300]
	]),

	"1988" : helpers.makeTestYear("Asia/Aqtobe", [
		["1988-03-26T20:59:59+00:00", "01:59:59", "+05", -300],
		["1988-03-26T21:00:00+00:00", "03:00:00", "+06", -360],
		["1988-09-24T20:59:59+00:00", "02:59:59", "+06", -360],
		["1988-09-24T21:00:00+00:00", "02:00:00", "+05", -300]
	]),

	"1989" : helpers.makeTestYear("Asia/Aqtobe", [
		["1989-03-25T20:59:59+00:00", "01:59:59", "+05", -300],
		["1989-03-25T21:00:00+00:00", "03:00:00", "+06", -360],
		["1989-09-23T20:59:59+00:00", "02:59:59", "+06", -360],
		["1989-09-23T21:00:00+00:00", "02:00:00", "+05", -300]
	]),

	"1990" : helpers.makeTestYear("Asia/Aqtobe", [
		["1990-03-24T20:59:59+00:00", "01:59:59", "+05", -300],
		["1990-03-24T21:00:00+00:00", "03:00:00", "+06", -360],
		["1990-09-29T20:59:59+00:00", "02:59:59", "+06", -360],
		["1990-09-29T21:00:00+00:00", "02:00:00", "+05", -300]
	]),

	"1991" : helpers.makeTestYear("Asia/Aqtobe", [
		["1991-03-30T20:59:59+00:00", "01:59:59", "+05", -300],
		["1991-03-30T21:00:00+00:00", "02:00:00", "+05", -300],
		["1991-09-28T21:59:59+00:00", "02:59:59", "+05", -300],
		["1991-09-28T22:00:00+00:00", "02:00:00", "+04", -240]
	]),

	"1992" : helpers.makeTestYear("Asia/Aqtobe", [
		["1992-01-18T21:59:59+00:00", "01:59:59", "+04", -240],
		["1992-01-18T22:00:00+00:00", "03:00:00", "+05", -300],
		["1992-03-28T20:59:59+00:00", "01:59:59", "+05", -300],
		["1992-03-28T21:00:00+00:00", "03:00:00", "+06", -360],
		["1992-09-26T20:59:59+00:00", "02:59:59", "+06", -360],
		["1992-09-26T21:00:00+00:00", "02:00:00", "+05", -300]
	]),

	"1993" : helpers.makeTestYear("Asia/Aqtobe", [
		["1993-03-27T20:59:59+00:00", "01:59:59", "+05", -300],
		["1993-03-27T21:00:00+00:00", "03:00:00", "+06", -360],
		["1993-09-25T20:59:59+00:00", "02:59:59", "+06", -360],
		["1993-09-25T21:00:00+00:00", "02:00:00", "+05", -300]
	]),

	"1994" : helpers.makeTestYear("Asia/Aqtobe", [
		["1994-03-26T20:59:59+00:00", "01:59:59", "+05", -300],
		["1994-03-26T21:00:00+00:00", "03:00:00", "+06", -360],
		["1994-09-24T20:59:59+00:00", "02:59:59", "+06", -360],
		["1994-09-24T21:00:00+00:00", "02:00:00", "+05", -300]
	]),

	"1995" : helpers.makeTestYear("Asia/Aqtobe", [
		["1995-03-25T20:59:59+00:00", "01:59:59", "+05", -300],
		["1995-03-25T21:00:00+00:00", "03:00:00", "+06", -360],
		["1995-09-23T20:59:59+00:00", "02:59:59", "+06", -360],
		["1995-09-23T21:00:00+00:00", "02:00:00", "+05", -300]
	]),

	"1996" : helpers.makeTestYear("Asia/Aqtobe", [
		["1996-03-30T20:59:59+00:00", "01:59:59", "+05", -300],
		["1996-03-30T21:00:00+00:00", "03:00:00", "+06", -360],
		["1996-10-26T20:59:59+00:00", "02:59:59", "+06", -360],
		["1996-10-26T21:00:00+00:00", "02:00:00", "+05", -300]
	]),

	"1997" : helpers.makeTestYear("Asia/Aqtobe", [
		["1997-03-29T20:59:59+00:00", "01:59:59", "+05", -300],
		["1997-03-29T21:00:00+00:00", "03:00:00", "+06", -360],
		["1997-10-25T20:59:59+00:00", "02:59:59", "+06", -360],
		["1997-10-25T21:00:00+00:00", "02:00:00", "+05", -300]
	]),

	"1998" : helpers.makeTestYear("Asia/Aqtobe", [
		["1998-03-28T20:59:59+00:00", "01:59:59", "+05", -300],
		["1998-03-28T21:00:00+00:00", "03:00:00", "+06", -360],
		["1998-10-24T20:59:59+00:00", "02:59:59", "+06", -360],
		["1998-10-24T21:00:00+00:00", "02:00:00", "+05", -300]
	]),

	"1999" : helpers.makeTestYear("Asia/Aqtobe", [
		["1999-03-27T20:59:59+00:00", "01:59:59", "+05", -300],
		["1999-03-27T21:00:00+00:00", "03:00:00", "+06", -360],
		["1999-10-30T20:59:59+00:00", "02:59:59", "+06", -360],
		["1999-10-30T21:00:00+00:00", "02:00:00", "+05", -300]
	]),

	"2000" : helpers.makeTestYear("Asia/Aqtobe", [
		["2000-03-25T20:59:59+00:00", "01:59:59", "+05", -300],
		["2000-03-25T21:00:00+00:00", "03:00:00", "+06", -360],
		["2000-10-28T20:59:59+00:00", "02:59:59", "+06", -360],
		["2000-10-28T21:00:00+00:00", "02:00:00", "+05", -300]
	]),

	"2001" : helpers.makeTestYear("Asia/Aqtobe", [
		["2001-03-24T20:59:59+00:00", "01:59:59", "+05", -300],
		["2001-03-24T21:00:00+00:00", "03:00:00", "+06", -360],
		["2001-10-27T20:59:59+00:00", "02:59:59", "+06", -360],
		["2001-10-27T21:00:00+00:00", "02:00:00", "+05", -300]
	]),

	"2002" : helpers.makeTestYear("Asia/Aqtobe", [
		["2002-03-30T20:59:59+00:00", "01:59:59", "+05", -300],
		["2002-03-30T21:00:00+00:00", "03:00:00", "+06", -360],
		["2002-10-26T20:59:59+00:00", "02:59:59", "+06", -360],
		["2002-10-26T21:00:00+00:00", "02:00:00", "+05", -300]
	]),

	"2003" : helpers.makeTestYear("Asia/Aqtobe", [
		["2003-03-29T20:59:59+00:00", "01:59:59", "+05", -300],
		["2003-03-29T21:00:00+00:00", "03:00:00", "+06", -360],
		["2003-10-25T20:59:59+00:00", "02:59:59", "+06", -360],
		["2003-10-25T21:00:00+00:00", "02:00:00", "+05", -300]
	]),

	"2004" : helpers.makeTestYear("Asia/Aqtobe", [
		["2004-03-27T20:59:59+00:00", "01:59:59", "+05", -300],
		["2004-03-27T21:00:00+00:00", "03:00:00", "+06", -360],
		["2004-10-30T20:59:59+00:00", "02:59:59", "+06", -360],
		["2004-10-30T21:00:00+00:00", "02:00:00", "+05", -300]
	])
};