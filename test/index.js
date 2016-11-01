var should = require('chai').should(),
    jsdom = require("jsdom"),
    lib = require('../downloadFile'),
    downloadFile = lib.downloadDomFile;

jsdom.env(
    "https://iojs.org/dist/", ["http://code.jquery.com/jquery.js"],
    function(err, window) {
        var url = 'http://mergeye.com/public/img/logo.png';
        downloadFile(window, url);
    }
);
