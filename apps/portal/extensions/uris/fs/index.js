(function () {
    var prefix = ues.utils.relativePrefix();

    var domain = ues.global.urlDomain || ues.global.userDomain;

    ues.plugins.uris['fs'] = function (uri) {
        return prefix + 'store/' + (domain ? domain + '/' : '') + 'fs/' + uri;
    };
}());