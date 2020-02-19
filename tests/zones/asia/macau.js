"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Macau"] = {

	"guess:by:offset" : helpers.makeTestGuess("Asia/Macau", { offset: true, expect: "Etc/GMT-8" }),

	"guess:by:abbr" : helpers.makeTestGuess("Asia/Macau", { abbr: true, expect: "Asia/Taipei" }),

	"1904" : helpers.makeTestYear("Asia/Macau", [
		["1904-10-29T16:25:49+00:00", "23:59:59", "LMT", -27250 / 60],
		["1904-10-29T16:25:50+00:00", "00:25:50", "CST", -480]
	]),

	"1941" : helpers.makeTestYear("Asia/Macau", [
		["1941-12-21T14:59:59+00:00", "22:59:59", "CST", -480],
		["1941-12-21T15:00:00+00:00", "00:00:00", "+09", -540]
	]),

	"1942" : helpers.makeTestYear("Asia/Macau", [
		["1942-04-30T13:59:59+00:00", "22:59:59", "+09", -540],
		["1942-04-30T14:00:00+00:00", "00:00:00", "+10", -600],
		["1942-11-17T12:59:59+00:00", "22:59:59", "+10", -600],
		["1942-11-17T13:00:00+00:00", "22:00:00", "+09", -540]
	]),

	"1943" : helpers.makeTestYear("Asia/Macau", [
		["1943-04-30T13:59:59+00:00", "22:59:59", "+09", -540],
		["1943-04-30T14:00:00+00:00", "00:00:00", "+10", -600],
		["1943-09-30T12:59:59+00:00", "22:59:59", "+10", -600],
		["1943-09-30T13:00:00+00:00", "22:00:00", "+09", -540]
	]),

	"1945" : helpers.makeTestYear("Asia/Macau", [
		["1945-09-30T14:59:59+00:00", "23:59:59", "+09", -540],
		["1945-09-30T15:00:00+00:00", "23:00:00", "CST", -480]
	]),

	"1946" : helpers.makeTestYear("Asia/Macau", [
		["1946-04-30T14:59:59+00:00", "22:59:59", "CST", -480],
		["1946-04-30T15:00:00+00:00", "00:00:00", "CDT", -540],
		["1946-09-30T14:59:59+00:00", "23:59:59", "CDT", -540],
		["1946-09-30T15:00:00+00:00", "23:00:00", "CST", -480]
	]),

	"1947" : helpers.makeTestYear("Asia/Macau", [
		["1947-04-19T14:59:59+00:00", "22:59:59", "CST", -480],
		["1947-04-19T15:00:00+00:00", "00:00:00", "CDT", -540],
		["1947-11-30T14:59:59+00:00", "23:59:59", "CDT", -540],
		["1947-11-30T15:00:00+00:00", "23:00:00", "CST", -480]
	]),

	"1948" : helpers.makeTestYear("Asia/Macau", [
		["1948-05-02T14:59:59+00:00", "22:59:59", "CST", -480],
		["1948-05-02T15:00:00+00:00", "00:00:00", "CDT", -540],
		["1948-10-31T14:59:59+00:00", "23:59:59", "CDT", -540],
		["1948-10-31T15:00:00+00:00", "23:00:00", "CST", -480]
	]),

	"1949" : helpers.makeTestYear("Asia/Macau", [
		["1949-04-02T14:59:59+00:00", "22:59:59", "CST", -480],
		["1949-04-02T15:00:00+00:00", "00:00:00", "CDT", -540],
		["1949-10-29T14:59:59+00:00", "23:59:59", "CDT", -540],
		["1949-10-29T15:00:00+00:00", "23:00:00", "CST", -480]
	]),

	"1950" : helpers.makeTestYear("Asia/Macau", [
		["1950-04-01T14:59:59+00:00", "22:59:59", "CST", -480],
		["1950-04-01T15:00:00+00:00", "00:00:00", "CDT", -540],
		["1950-10-28T14:59:59+00:00", "23:59:59", "CDT", -540],
		["1950-10-28T15:00:00+00:00", "23:00:00", "CST", -480]
	]),

	"1951" : helpers.makeTestYear("Asia/Macau", [
		["1951-03-31T14:59:59+00:00", "22:59:59", "CST", -480],
		["1951-03-31T15:00:00+00:00", "00:00:00", "CDT", -540],
		["1951-10-28T14:59:59+00:00", "23:59:59", "CDT", -540],
		["1951-10-28T15:00:00+00:00", "23:00:00", "CST", -480]
	]),

	"1952" : helpers.makeTestYear("Asia/Macau", [
		["1952-04-05T14:59:59+00:00", "22:59:59", "CST", -480],
		["1952-04-05T15:00:00+00:00", "00:00:00", "CDT", -540],
		["1952-11-01T14:59:59+00:00", "23:59:59", "CDT", -540],
		["1952-11-01T15:00:00+00:00", "23:00:00", "CST", -480]
	]),

	"1953" : helpers.makeTestYear("Asia/Macau", [
		["1953-04-04T14:59:59+00:00", "22:59:59", "CST", -480],
		["1953-04-04T15:00:00+00:00", "00:00:00", "CDT", -540],
		["1953-10-31T14:59:59+00:00", "23:59:59", "CDT", -540],
		["1953-10-31T15:00:00+00:00", "23:00:00", "CST", -480]
	]),

	"1954" : helpers.makeTestYear("Asia/Macau", [
		["1954-03-20T14:59:59+00:00", "22:59:59", "CST", -480],
		["1954-03-20T15:00:00+00:00", "00:00:00", "CDT", -540],
		["1954-10-30T14:59:59+00:00", "23:59:59", "CDT", -540],
		["1954-10-30T15:00:00+00:00", "23:00:00", "CST", -480]
	]),

	"1955" : helpers.makeTestYear("Asia/Macau", [
		["1955-03-19T14:59:59+00:00", "22:59:59", "CST", -480],
		["1955-03-19T15:00:00+00:00", "00:00:00", "CDT", -540],
		["1955-11-05T14:59:59+00:00", "23:59:59", "CDT", -540],
		["1955-11-05T15:00:00+00:00", "23:00:00", "CST", -480]
	]),

	"1956" : helpers.makeTestYear("Asia/Macau", [
		["1956-03-17T14:59:59+00:00", "22:59:59", "CST", -480],
		["1956-03-17T15:00:00+00:00", "00:00:00", "CDT", -540],
		["1956-11-03T18:29:59+00:00", "03:29:59", "CDT", -540],
		["1956-11-03T18:30:00+00:00", "02:30:00", "CST", -480]
	]),

	"1957" : helpers.makeTestYear("Asia/Macau", [
		["1957-03-23T19:29:59+00:00", "03:29:59", "CST", -480],
		["1957-03-23T19:30:00+00:00", "04:30:00", "CDT", -540],
		["1957-11-02T18:29:59+00:00", "03:29:59", "CDT", -540],
		["1957-11-02T18:30:00+00:00", "02:30:00", "CST", -480]
	]),

	"1958" : helpers.makeTestYear("Asia/Macau", [
		["1958-03-22T19:29:59+00:00", "03:29:59", "CST", -480],
		["1958-03-22T19:30:00+00:00", "04:30:00", "CDT", -540],
		["1958-11-01T18:29:59+00:00", "03:29:59", "CDT", -540],
		["1958-11-01T18:30:00+00:00", "02:30:00", "CST", -480]
	]),

	"1959" : helpers.makeTestYear("Asia/Macau", [
		["1959-03-21T19:29:59+00:00", "03:29:59", "CST", -480],
		["1959-03-21T19:30:00+00:00", "04:30:00", "CDT", -540],
		["1959-10-31T18:29:59+00:00", "03:29:59", "CDT", -540],
		["1959-10-31T18:30:00+00:00", "02:30:00", "CST", -480]
	]),

	"1960" : helpers.makeTestYear("Asia/Macau", [
		["1960-03-19T19:29:59+00:00", "03:29:59", "CST", -480],
		["1960-03-19T19:30:00+00:00", "04:30:00", "CDT", -540],
		["1960-11-05T18:29:59+00:00", "03:29:59", "CDT", -540],
		["1960-11-05T18:30:00+00:00", "02:30:00", "CST", -480]
	]),

	"1961" : helpers.makeTestYear("Asia/Macau", [
		["1961-03-18T19:29:59+00:00", "03:29:59", "CST", -480],
		["1961-03-18T19:30:00+00:00", "04:30:00", "CDT", -540],
		["1961-11-04T18:29:59+00:00", "03:29:59", "CDT", -540],
		["1961-11-04T18:30:00+00:00", "02:30:00", "CST", -480]
	]),

	"1962" : helpers.makeTestYear("Asia/Macau", [
		["1962-03-17T19:29:59+00:00", "03:29:59", "CST", -480],
		["1962-03-17T19:30:00+00:00", "04:30:00", "CDT", -540],
		["1962-11-03T18:29:59+00:00", "03:29:59", "CDT", -540],
		["1962-11-03T18:30:00+00:00", "02:30:00", "CST", -480]
	]),

	"1963" : helpers.makeTestYear("Asia/Macau", [
		["1963-03-23T19:29:59+00:00", "03:29:59", "CST", -480],
		["1963-03-23T19:30:00+00:00", "04:30:00", "CDT", -540],
		["1963-11-02T18:29:59+00:00", "03:29:59", "CDT", -540],
		["1963-11-02T18:30:00+00:00", "02:30:00", "CST", -480]
	]),

	"1964" : helpers.makeTestYear("Asia/Macau", [
		["1964-03-21T19:29:59+00:00", "03:29:59", "CST", -480],
		["1964-03-21T19:30:00+00:00", "04:30:00", "CDT", -540],
		["1964-10-31T18:29:59+00:00", "03:29:59", "CDT", -540],
		["1964-10-31T18:30:00+00:00", "02:30:00", "CST", -480]
	]),

	"1965" : helpers.makeTestYear("Asia/Macau", [
		["1965-04-17T19:29:59+00:00", "03:29:59", "CST", -480],
		["1965-04-17T19:30:00+00:00", "04:30:00", "CDT", -540],
		["1965-10-16T17:29:59+00:00", "02:29:59", "CDT", -540],
		["1965-10-16T17:30:00+00:00", "01:30:00", "CST", -480]
	]),

	"1966" : helpers.makeTestYear("Asia/Macau", [
		["1966-04-16T19:29:59+00:00", "03:29:59", "CST", -480],
		["1966-04-16T19:30:00+00:00", "04:30:00", "CDT", -540],
		["1966-10-15T17:29:59+00:00", "02:29:59", "CDT", -540],
		["1966-10-15T17:30:00+00:00", "01:30:00", "CST", -480]
	]),

	"1967" : helpers.makeTestYear("Asia/Macau", [
		["1967-04-15T19:29:59+00:00", "03:29:59", "CST", -480],
		["1967-04-15T19:30:00+00:00", "04:30:00", "CDT", -540],
		["1967-10-21T18:29:59+00:00", "03:29:59", "CDT", -540],
		["1967-10-21T18:30:00+00:00", "02:30:00", "CST", -480]
	]),

	"1968" : helpers.makeTestYear("Asia/Macau", [
		["1968-04-20T19:29:59+00:00", "03:29:59", "CST", -480],
		["1968-04-20T19:30:00+00:00", "04:30:00", "CDT", -540],
		["1968-10-19T18:29:59+00:00", "03:29:59", "CDT", -540],
		["1968-10-19T18:30:00+00:00", "02:30:00", "CST", -480]
	]),

	"1969" : helpers.makeTestYear("Asia/Macau", [
		["1969-04-19T19:29:59+00:00", "03:29:59", "CST", -480],
		["1969-04-19T19:30:00+00:00", "04:30:00", "CDT", -540],
		["1969-10-18T18:29:59+00:00", "03:29:59", "CDT", -540],
		["1969-10-18T18:30:00+00:00", "02:30:00", "CST", -480]
	]),

	"1970" : helpers.makeTestYear("Asia/Macau", [
		["1970-04-18T19:29:59+00:00", "03:29:59", "CST", -480],
		["1970-04-18T19:30:00+00:00", "04:30:00", "CDT", -540],
		["1970-10-17T18:29:59+00:00", "03:29:59", "CDT", -540],
		["1970-10-17T18:30:00+00:00", "02:30:00", "CST", -480]
	]),

	"1971" : helpers.makeTestYear("Asia/Macau", [
		["1971-04-17T19:29:59+00:00", "03:29:59", "CST", -480],
		["1971-04-17T19:30:00+00:00", "04:30:00", "CDT", -540],
		["1971-10-16T18:29:59+00:00", "03:29:59", "CDT", -540],
		["1971-10-16T18:30:00+00:00", "02:30:00", "CST", -480]
	]),

	"1972" : helpers.makeTestYear("Asia/Macau", [
		["1972-04-15T19:29:59+00:00", "03:29:59", "CST", -480],
		["1972-04-15T19:30:00+00:00", "04:30:00", "CDT", -540],
		["1972-10-21T18:29:59+00:00", "03:29:59", "CDT", -540],
		["1972-10-21T18:30:00+00:00", "02:30:00", "CST", -480]
	]),

	"1973" : helpers.makeTestYear("Asia/Macau", [
		["1973-04-21T19:29:59+00:00", "03:29:59", "CST", -480],
		["1973-04-21T19:30:00+00:00", "04:30:00", "CDT", -540],
		["1973-10-20T18:29:59+00:00", "03:29:59", "CDT", -540],
		["1973-10-20T18:30:00+00:00", "02:30:00", "CST", -480],
		["1973-12-29T19:29:59+00:00", "03:29:59", "CST", -480],
		["1973-12-29T19:30:00+00:00", "04:30:00", "CDT", -540]
	]),

	"1974" : helpers.makeTestYear("Asia/Macau", [
		["1974-10-19T18:29:59+00:00", "03:29:59", "CDT", -540],
		["1974-10-19T18:30:00+00:00", "02:30:00", "CST", -480]
	]),

	"1975" : helpers.makeTestYear("Asia/Macau", [
		["1975-04-19T19:29:59+00:00", "03:29:59", "CST", -480],
		["1975-04-19T19:30:00+00:00", "04:30:00", "CDT", -540],
		["1975-10-18T18:29:59+00:00", "03:29:59", "CDT", -540],
		["1975-10-18T18:30:00+00:00", "02:30:00", "CST", -480]
	]),

	"1976" : helpers.makeTestYear("Asia/Macau", [
		["1976-04-17T19:29:59+00:00", "03:29:59", "CST", -480],
		["1976-04-17T19:30:00+00:00", "04:30:00", "CDT", -540],
		["1976-10-16T18:29:59+00:00", "03:29:59", "CDT", -540],
		["1976-10-16T18:30:00+00:00", "02:30:00", "CST", -480]
	]),

	"1979" : helpers.makeTestYear("Asia/Macau", [
		["1979-05-12T19:29:59+00:00", "03:29:59", "CST", -480],
		["1979-05-12T19:30:00+00:00", "04:30:00", "CDT", -540],
		["1979-10-20T18:29:59+00:00", "03:29:59", "CDT", -540],
		["1979-10-20T18:30:00+00:00", "02:30:00", "CST", -480]
	])
};