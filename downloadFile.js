module.exports = {
    downloadDomFile: function(window, url) {
        var link = window.document.createElement('a');
        link.setAttribute('href', url);
        link.setAttribute('download', 'download');
        onload = link.click();
    },
    downloadFile: function(url) {
        var link = document.createElement('a');
        link.setAttribute('href', url);
        link.setAttribute('download', 'download');
        onload = link.click();
    }
}
